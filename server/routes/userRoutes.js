const express = require('express');
const { getUserProfile, registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', authMiddleware, getUserProfile); // Use authMiddleware for protected route

module.exports = router;
