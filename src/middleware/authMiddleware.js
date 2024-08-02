const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Log the entire headers object to see what's being received
    console.log('Headers:', req.headers);

    // Extract token from 'Authorization' header
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Extract token from 'Bearer <token>' format
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};
