// routes/voteRoutes.js

const express = require('express');
const {
    createVote,
    getVotes,
    getVoteById,
    updateVote,
    deleteVote,
} = require('../controllers/vote.controller');

const router = express.Router();

// Routes for votes
router.post('/', createVote); // Create a new vote
router.get('/', getVotes); // Get all votes
router.get('/:id', getVoteById); // Get a vote by ID
router.put('/:id', updateVote); // Update a vote by ID
router.delete('/:id', deleteVote); // Delete a vote by ID

module.exports = router
