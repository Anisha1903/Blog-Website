const jwt = require('jsonwebtoken');
require("dotenv").config();
const jwtSecretKey = process.env.MySecretkey;

const authenticateToken = (req, res, next) => {
    const authHeader  = req.headers.authorization;
    // console.log(authHeader )
    if (!authHeader  || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'No token provided. Access denied.',
        });
    }

    const token  = authHeader.replace('Bearer ', '');
    
    jwt.verify(token , jwtSecretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token. Access denied.',
            });
        }

        req.userId = decoded.userId;
        next(); 
    });
};

module.exports = authenticateToken;