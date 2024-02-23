const PerformanceMetrics = require("../models/performanceMetrics");

exports.createPerformanceMetrics = async (req, res) => {
  try {
    const performanceMetrics = new PerformanceMetrics(req.body);
    await performanceMetrics.save();
    res.status(201).json({
      success: true,
      data: performanceMetrics,
      message: "Performance Metrics created successfully",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllPerformanceMetrics = async (req, res) => {
  try {
    const performanceMetrics = await PerformanceMetrics.find({});
    if (!performanceMetrics) {
      return res.status(404).send({ error: "Performance Metrics not found" });
    }
    res.status(200).json({
      success: true,
      data: performanceMetrics,
      message: "All Performance-Metrics retrieved successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPerformanceMetricsById = async (req, res) => {
  try {
    const id = req.params.id;
    const performanceMetrics = await PerformanceMetrics.findById({ _id: id });
    if (!performanceMetrics) {
      return res.status(404).send({ error: "Performance Metrics not found" });
    }
    res.status(200).json({
      success: true,
      data: performanceMetrics,
      message: "Performance-Metrics retrieved successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePerformanceMetrics = async (req, res) => {
  try {
    const { id } = req.params;
    const performanceMetrics = await PerformanceMetrics.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    if (!performanceMetrics) {
      return res.status(404).send({ error: "Performance Metrics not found" });
    }
    res.status(200).json({
      success: true,
      data: performanceMetrics,
      message: "Performance-Metrics Updated successfully",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePerformanceMetrics = async (req, res) => {
  try {
    const id = req.params.id;
    const performanceMetrics = await PerformanceMetrics.findByIdAndDelete({
      _id: id,
    });
    if (!performanceMetrics) {
      return res.status(404).send({ error: "Performance Metrics not found" });
    }
    res.status(200).json({
      success: true,
      data: performanceMetrics,
      message: "Performance-Metrics Deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};