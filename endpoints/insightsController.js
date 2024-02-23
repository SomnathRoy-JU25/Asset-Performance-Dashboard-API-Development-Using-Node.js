const PerformanceMetrics = require("../models/performanceMetrics");

const threshold = 0.1; // Define threshold for high failure rate (adjust value as needed)

const calculateAverageDowntime = async () => {
  try {
    const averageDowntime = await PerformanceMetrics.aggregate([
      {
        $group: {
          _id: null,
          averageDowntime: { $avg: "$downtime" },
        },
      },
    ]);
    return averageDowntime[0].averageDowntime;
  } catch (error) {
    console.error("Error calculating average downtime:", error);
    throw error;
  }
};

const calculateTotalMaintenanceCosts = async () => {
  try {
    const totalMaintenanceCosts = await PerformanceMetrics.aggregate([
      {
        $group: {
          _id: null,
          totalMaintenanceCosts: { $sum: "$maintenanceCosts" },
        },
      },
    ]);
    return totalMaintenanceCosts[0].totalMaintenanceCosts;
  } catch (error) {
    console.error("Error calculating total maintenance costs:", error);
    throw error;
  }
};

const identifyAssetsWithHighFailureRates = async () => {
  try {
    const assetsWithHighFailureRates = await PerformanceMetrics.aggregate([
      {
        $group: {
          _id: "$assetId",
          averageFailureRate: { $avg: "$failureRate" },
        },
      },
      {
        $match: { averageFailureRate: { $gt: threshold } },
      },
    ]);
    return assetsWithHighFailureRates;
  } catch (error) {
    console.error("Error identifying assets with high failure rates:", error);
    throw error;
  }
};

// Controller to get insights
exports.getInsights = async (req, res) => {
  try {
    // Logic for aggregating data to provide insights
    const averageDowntime = await calculateAverageDowntime();
    const totalMaintenanceCosts = await calculateTotalMaintenanceCosts();
    const assetsWithHighFailureRates =
      await identifyAssetsWithHighFailureRates();

    // Return insights
    res.status(200).json({
      sucess: true,
      message: "Insights fetched successfully",
      data: {
        averageDowntime,
        totalMaintenanceCosts,
        assetsWithHighFailureRates,
      },
    });
  } catch (error) {
    console.error("Error getting insights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};