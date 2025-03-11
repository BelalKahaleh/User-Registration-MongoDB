const jwt = require('jsonwebtoken');

// Assuming token is stored in cookies
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }

        req.userId = decoded.id; // Attach user ID to the request object
        next();
    });
};

module.exports = authMiddleware;
