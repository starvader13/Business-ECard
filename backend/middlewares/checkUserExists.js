const { User } = require("../db/script");

async function checkUserExists(req, res, next){
    const jsonPayload = req.body;

    const response = await User.findOne(jsonPayload);

    if(!response){
        return res.status(401).json({
            msg: "Either the email or the password is incorrect"
        });
    }

    return next();
}

module.exports = checkUserExists;