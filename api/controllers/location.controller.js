// controllers/pollingBoothController.js

const fs = require('fs');
const csv = require('csv-parser');
const geolib = require('geolib');

const getAllPollingLocations = (req, res) => {
    const locations = [];

    fs.createReadStream('data/polling_booths.csv') // Update the path to the CSV file
    .pipe(csv())
    .on('data', (row) => {
        locations.push({
            name: row['Polling Booth Name'],
            address: row['Polling Booth Address'],
            hearingAid: row.HearingAid,
            braille: row.Braille,
            interpreter: row['Interpreter Services'],
            latitude: parseFloat(row.latitude),
                       longitude: parseFloat(row.longitude),
        });
    })
    .on('end', () => {
        res.json(locations);
    })
    .on('error', (error) => {
        res.status(500).json({ error: 'An error occurred while processing the CSV file' });
    });
};


// Function to recommend polling booths
const recommendPollingBooths = (userLocation, requiresBraille, requiresInterpreter, requiresHearingAid) => {
    return new Promise((resolve, reject) => {
        const recommendedBooths = [];

        fs.createReadStream('data/polling_booths.csv') // Update the path to the CSV file
        .pipe(csv())
        .on('data', (row) => {
            const boothLocation = { latitude: parseFloat(row.latitude), longitude: parseFloat(row.longitude) };
            const distance = geolib.getDistance(userLocation, boothLocation);

            // Check accessibility criteria based on user requirements
            const meetsBraille = requiresBraille && row.Braille === 'Yes';
            const meetsInterpreter = requiresInterpreter && row['Interpreter Services'] === 'Yes';
            const meetsHearingAid = requiresHearingAid && row.HearingAid === 'Yes';

            // Add the booth if it meets all specified requirements by the user
            if (
                (requiresBraille? meetsBraille : true) &&
                (requiresInterpreter? meetsInterpreter : true) &&
                (requiresHearingAid? meetsHearingAid: true)
            ) {
                recommendedBooths.push({
                    name: row['Polling Booth Name'],
                    address: row['Polling Booth Address'],
                    distance: distance / 1000, // Convert to kilometers
                    hearingAid: row.HearingAid,
                    braille: row.Braille,
                    interpreter: row['Interpreter Services'],
                });
            }
        })
        .on('end', () => {
            // Sort by distance
            recommendedBooths.sort((a, b) => a.distance - b.distance);
            closestBooths = recommendedBooths.slice(0,11);
            resolve(closestBooths);
        })
        .on('error', (error) => {
            reject(error);
        });
    });
};

// API controller for recommending polling booths
const recommendBoothsController = async (req, res) => {
    const { userLocation, requiresBraille, requiresInterpreter, requiresHearingAid } = req.body;

    // Validate input
    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
        return res.status(400).json({ error: 'Invalid user location provided' });
    }

    try {
        const recommendedBooths = await recommendPollingBooths(userLocation, requiresBraille, requiresInterpreter, requiresHearingAid);
        res.json(recommendedBooths);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
};

module.exports = {
    recommendBoothsController,
    getAllPollingLocations
};
