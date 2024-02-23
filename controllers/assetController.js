const Asset = require("../models/asset");

exports.createAsset = async (req, res) => {
  try {
    const asset = new Asset(req.body);
    await asset.save();
    //response
    res.status(200).json({
      success: true,
      data: asset,
      message: "Asset Created Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAssets = async (req, res) => {
  try {
    //fetch all asset items from database
    const assets = await Asset.find({});
    //response
    res.status(200).json({
      success: true,
      data: assets,
      message: "Entire asset Data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error",
    });
  }
};

exports.getAssetById = async (req, res) => {
  try {
    const id = req.params.id; // Extract assetId from request parameters
    const asset = await Asset.findById({ _id: id });
    if (!asset) {
      return res.status(404).json({
        success: false,
        error: "Asset not found",
      });
    }
    //response
    res.status(200).json({
      success: true,
      data: asset,
      message: "Asset retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const { id } = req.params; // Extract assetId from request parameters
    const asset = await Asset.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!asset) {
      return res.status(404).json({
        success: false,
        error: "Asset not found",
      });
    }
    res.status(200).json({
      success: true,
      data: asset,
      message: "Asset updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const id = req.params.id; // Extract assetId from request parameters
    const asset = await Asset.findByIdAndDelete({ _id: id });
    if (!asset) {
      return res.status(404).json({
        success: false,
        error: "Asset not found",
      });
    }
    res.status(200).json({
      success: true,
      data: asset,
      message: "Asset deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};