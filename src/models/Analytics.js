const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
    deviceId: { type: String, required: true },
    timestamp: { type: Date, required: true },
    metric: { type: String, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
