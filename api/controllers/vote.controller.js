const {prisma} = require('../utils/prisma')


// Create a new vote
const createVote = async (req, res) => {
    const { voterId, name, data, election, candidate, party } = req.body;

    try {
        const newVote = await prisma.vote.create({
            data: {
                voterId,
                name,
                data,
                election,
                candidate,
                party,
            },
        });
        res.status(201).json(newVote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating vote' });
    }
};

// Get all votes
const getVotes = async (req, res) => {
    try {
        const votes = await prisma.vote.findMany();
        res.status(200).json(votes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching votes' });
    }
};

// Get a single vote by ID
 const getVoteById = async (req, res) => {
    const { id } = req.params;

    try {
        const vote = await prisma.vote.findUnique({
            where: { id },
        });
        if (!vote) {
            return res.status(404).json({ error: 'Vote not found' });
        }
        res.status(200).json(vote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching vote' });
    }
};

// Update a vote by ID
const updateVote = async (req, res) => {
    const { id } = req.params;
    const { voterId, name, data, election, candidate, party } = req.body;

    try {
        const updatedVote = await prisma.vote.update({
            where: { id },
            data: {
                voterId,
                name,
                data,
                election,
                candidate,
                party,
            },
        });
        res.status(200).json(updatedVote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating vote' });
    }
};

// Delete a vote by ID
 const deleteVote = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.vote.delete({
            where: { id },
        });
        res.status(204).send(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting vote' });
    }
};

module.exports = {deleteVote, updateVote, createVote, getVotes, getVoteById}