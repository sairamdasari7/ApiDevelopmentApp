const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');

exports.getReportData = async (req, res) => {
    try {
        const { deviceId, startDate, endDate } = req.query;
        const query = { deviceId };

        if (startDate && endDate) {
            query.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
        }

        const uptimeData = await Uptime.find(query).sort({ timestamp: 1 });
        const analyticsData = await Analytics.find(query).sort({ timestamp: 1 });

        // Additional data processing and aggregation here

        res.json({
            uptimeData,
            analyticsData,
            // Add aggregated data
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching report data', error });
    }
};
