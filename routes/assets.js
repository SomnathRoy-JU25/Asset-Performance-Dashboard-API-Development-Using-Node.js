// routes/assets.js
const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.post('/create', assetController.createAsset);
router.get('/getbyId/:id', assetController.getAssetById);
router.get('/getAll', assetController.getAssets);
router.put('/update/:id', assetController.updateAsset);
router.delete('/delete/:id', assetController.deleteAsset); 

module.exports = router;