const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const protectRoute = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(400).json({ error: "Unauthorized - No Token Provided" });
        }
        const token = authHeader.split(' ')[1];

        // Verify and decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        // Find user by decoded userId
        const user = await UserModel.findById(decoded.userId).select('-password');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach userId to request object
        req.userId = user._id;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = protectRoute;
