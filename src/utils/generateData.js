require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');

const generateData = async () => {
    try {
        const deviceId = 'device123';
        const currentTime = new Date();
        const twoMonthsAgo = new Date(currentTime);
        twoMonthsAgo.setMonth(currentTime.getMonth() - 2);

        console.log('Generating uptime data...');
        // Generate uptime data
        for (let d = twoMonthsAgo; d <= currentTime; d.setMinutes(d.getMinutes() + 5)) {
            const status = Math.random() > 0.1 ? 'up' : 'down';
            await Uptime.create({
                deviceId,
                timestamp: new Date(d),
                status,
            });
            console.log(`Uptime data inserted: ${new Date(d)}, Status: ${status}`);
        }

        console.log('Generating analytical data...');
        // Generate analytical data
        for (let d = twoMonthsAgo; d <= currentTime; d.setMinutes(d.getMinutes() + 5)) {
            const value = Math.floor(Math.random() * 100);
            await Analytics.create({
                deviceId,
                timestamp: new Date(d),
                metric: 'cpu_usage',
                value,
            });
            console.log(`Analytics data inserted: ${new Date(d)}, Value: ${value}`);
        }

        console.log('Data generation complete');
    } catch (err) {
        console.error('Error generating data:', err);
    }
};

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        return generateData();
    })
    .then(() => {
        return mongoose.disconnect();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
