
const express = require('express');
const { recommendBoothsController, getAllPollingLocations } = require('../controllers/location.controller');

const router = express.Router();

// API endpoint for recommending polling booths
router.post('/recommend-booths', recommendBoothsController);
router.get('/', getAllPollingLocations);

module.exports = router;
