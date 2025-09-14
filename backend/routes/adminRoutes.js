const express = require('express');
const { getMessages } = require('../controllers/adminController');
const router = express.Router();

// Simple auth middleware
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === 'Bearer your_admin_token') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

router.get('/messages', authMiddleware, getMessages);

module.exports = router;
