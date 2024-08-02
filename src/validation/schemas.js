const Joi = require('joi');

const uptimeSchema = Joi.object({
    deviceId: Joi.string().required(),
    timestamp: Joi.date().required(),
    status: Joi.string().valid('up', 'down').required(),
});

const analyticsSchema = Joi.object({
    deviceId: Joi.string().required(),
    timestamp: Joi.date().required(),
    metric: Joi.string().required(),
    value: Joi.number().required(),
});

module.exports = {
    uptimeSchema,
    analyticsSchema,
};
