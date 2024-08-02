const express = require('express');
const router = express.Router();
const uptimeController = require('../controllers/uptimeController');
const analyticsController = require('../controllers/analyticsController');
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');

// Route to generate a JWT token (for testing purposes)
router.post('/login', (req, res) => {
    // Example payload; in a real application, you'd validate user credentials
    const payload = { id: 'user_id' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected routes
router.get('/uptime', authMiddleware, uptimeController.getUptimeData);
router.get('/analytics', authMiddleware, analyticsController.getAnalyticsData);
router.get('/report', authMiddleware, reportController.getReportData);

module.exports = router;
