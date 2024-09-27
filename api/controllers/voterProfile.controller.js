const {prisma} = require('../utils/prisma')

// Create a new voter
const createVoter = async (req, res) => {
    try {
        const { location, votingMethod, braille, interpreter, wheelchair, age, gender, votingId } = req.body;

        const newVoter = await prisma.voter.create({
            data: {
                votingId,
                location,
                votingMethod,
                braille,
                interpreter,
                wheelchair,
                age,
                gender
            }
        });

        res.status(201).json(newVoter);
    } catch (error) {
        res.status(500).json({ error: "Error creating voter", details: error.message });
    }
};

// Get a voter by ID
const getVoter = async (req, res) => {
    try {
        const { id } = req.params;

        const voter = await prisma.voter.findUnique({
            where: { votingId: id },
        });

        if (!voter) {
            return res.status(404).json({ error: "Voter not found" });
        }

        res.status(200).json(voter);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving voter", details: error.message });
    }
};

// Update a voter by ID
const updateVoter = async (req, res) => {
    try {
        const { id } = req.params;
        const { location, votingMethod, braille, interpreter, wheelchair, age, gender } = req.body;

        const updatedVoter = await prisma.voter.update({
            where: { votingId: id },
                data: {
                location,
                votingMethod,
                braille,
                interpreter,
                wheelchair,
                age,
                gender
                },
        });

        res.status(200).json(updatedVoter);
    } catch (error) {
        res.status(500).json({ error: "Error updating voter", details: error.message });
    }
};

// Delete a voter by ID
const deleteVoter = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.voter.delete({
            where: { votingId: id },
        });

        res.status(200).json({ message: "Voter deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting voter", details: error.message });
    }
};

module.exports = {
    createVoter,
    getVoter,
    updateVoter,
    deleteVoter
};
