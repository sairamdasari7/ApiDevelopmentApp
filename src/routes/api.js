const express = require('express');
const router = express.Router();
const uptimeController = require('../controllers/uptimeController');
const analyticsController = require('../controllers/analyticsController');
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const payload = { id: 'user_id' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

router.get('/uptime', authMiddleware, uptimeController.getUptimeData);
router.get('/analytics', authMiddleware, analyticsController.getAnalyticsData);
router.get('/report', authMiddleware, reportController.getReportData);

module.exports = router;
