const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uptimeSchema = new Schema({
    deviceId: { type: String, required: true },
    timestamp: { type: Date, required: true },
    status: { type: String, enum: ['up', 'down'], required: true },
});

module.exports = mongoose.model('Uptime', uptimeSchema);
