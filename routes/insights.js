// routes/insights.js (updated)
const express = require('express');
const router = express.Router();
const insightsController = require('../endpoints/insightsController');
const authenticate = require('../middleware/authenticate');

// Endpoint to get insights (secured with authentication)
router.get('/getInsights',authenticate, insightsController.getInsights);

module.exports = router;