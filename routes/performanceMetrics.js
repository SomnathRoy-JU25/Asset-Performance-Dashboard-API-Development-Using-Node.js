// routes/performanceMetrics.js
const express = require('express');
const router = express.Router();
const performanceMetricsController = require('../controllers/performanceMetricsController');

router.post('/create', performanceMetricsController.createPerformanceMetrics);
router.get('/getPerformanceMetricsById/:id', performanceMetricsController.getPerformanceMetricsById);
router.get('/getAll', performanceMetricsController.getAllPerformanceMetrics);
router.put('/updatePerformanceMetricsId/:id', performanceMetricsController.updatePerformanceMetrics);
router.delete('/deletePerformanceMetrics/:id', performanceMetricsController.deletePerformanceMetrics);


module.exports = router;