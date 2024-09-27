const express = require('express');
const voterController = require('../controllers/voterProfile.controller');

const router = express.Router();

// Routes
router.post('/create', voterController.createVoter);     // Create a new voter
router.get('/:id', voterController.getVoter);            // Get a voter by ID
router.put('/:id', voterController.updateVoter);         // Update a voter by ID
router.delete('/:id', voterController.deleteVoter);      // Delete a voter by ID

module.exports = router;
