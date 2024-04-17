const zod = require('zod');

const signAuthenticationSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(4)
})

function signAuthSchemaValidation(req, res, next){
    const jsonPayload = req.body;

    if(!signAuthenticationSchema.safeParse(jsonPayload).success){
        return res.status(401).json({
            msg: "Either the email or the password does not match input pattern",
            emailResponse: "A valid email is required",
            passwordResponse: "Password should have a minimum length of 4"
        })
    }

    return next();
}

module.exports = signAuthSchemaValidation;