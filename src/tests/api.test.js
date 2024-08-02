const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('API Tests', () => {
    beforeAll(async () => {
        // Connect to the test database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // Close the database connection
        await mongoose.connection.close();
    });

    test('GET /api/uptime should return uptime data', async () => {
        const response = await request(app)
            .get('/api/uptime')
            .set('Authorization', `Bearer ${token}`)
            .query({ deviceId: 'device123', startDate: '2023-06-01', endDate: '2023-08-01' });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    // Additional test cases for other endpoints
});
