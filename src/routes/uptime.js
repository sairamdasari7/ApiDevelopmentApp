const express = require('express');
const router = express.Router();
const Uptime = require('../models/Uptime');

// GET /api/uptime
router.get('/', async (req, res) => {
    try {
        const uptimes = await Uptime.find();
        res.json(uptimes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
