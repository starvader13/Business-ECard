const jwt = require("jsonwebtoken");
require('dotenv').config();

const secretKey = process.env.JWT_SECRET_STRING;

function userAuthorization(req, res, next){
    const token = req.headers.authorization;
    const signature = token.split(" ")[1];

    try{
        jwt.verify(signature, secretKey);
        return next();
    }catch(e){
        return res.status(403).json({
            msg: "Unauthorized User"
        })
    }
}

module.exports = userAuthorization;