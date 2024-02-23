// models/performanceMetrics.js
const mongoose = require("mongoose");

const performanceMetricsSchema = new mongoose.Schema({
  assetId: {
    type: String,
    required: true,
  },
  uptime: {
    type: Number,
    required: true,
  },
  downtime: {
    type: Number,
    required: true,
  },
  maintenanceCosts: {
    type: Number,
    required: true,
  },
  failureRate: {
    type: Number,
    required: true,
  },
  efficiency: {
    type: Number,
    required: true,
  },
});

const PerformanceMetrics = mongoose.model(
  "PerformanceMetrics",
  performanceMetricsSchema
);

module.exports = PerformanceMetrics;