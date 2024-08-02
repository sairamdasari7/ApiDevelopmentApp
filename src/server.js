const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Add a basic route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Uptime Analytics API');
});

// Use the API routes
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
