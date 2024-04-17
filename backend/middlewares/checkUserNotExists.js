const { User } = require("../db/script");

async function checkUserNotExists(req, res, next){
    const jsonPayload = req.body;

    const response = await User.findOne({email: jsonPayload.email});

    if(response){
        return res.status(401).json({
            msg: "Email Already Exists. Please Signin"
        });
    }

    return next();
}

module.exports = checkUserNotExists;