const Uptime = require('../models/Uptime');

exports.getUptimeData = async (req, res) => {
    try {
        const { deviceId, startDate, endDate } = req.query;
        const query = { deviceId };

        if (startDate && endDate) {
            query.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
        }

        const uptimeData = await Uptime.find(query).sort({ timestamp: 1 });
        res.json(uptimeData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching uptime data', error });
    }
};
