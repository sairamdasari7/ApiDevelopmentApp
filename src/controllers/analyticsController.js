const Analytics = require('../models/Analytics');

exports.getAnalyticsData = async (req, res) => {
    try {
        const { deviceId, startDate, endDate, aggregateBy } = req.query;
        const query = { deviceId };

        if (startDate && endDate) {
            query.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
        }

        const groupBy = aggregateBy === 'hour' ? {
            $hour: '$timestamp'
        } : {
            $dayOfYear: '$timestamp'
        };

        const analyticsData = await Analytics.aggregate([
            { $match: query },
            {
                $group: {
                    _id: {
                        deviceId: '$deviceId',
                        date: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
                        period: groupBy
                    },
                    avgValue: { $avg: '$value' },
                    maxValue: { $max: '$value' },
                    minValue: { $min: '$value' },
                }
            }
        ]);

        res.json(analyticsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytical data', error });
    }
};
