// models/asset.js
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  assetId: {
    type: String,
    required: true,
  },
  assetName: {
    type: String,
    required: true,
  },
  assetType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  initialCost: {
    type: Number,
    required: true,
  },
  operationalStatus: {
    type: String,
  },
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;