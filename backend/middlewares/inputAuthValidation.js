const zod = require('zod');

const inputAuthenticationSchema = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(1),
    linkedin: zod.string().startsWith("https://www.linkedin.com/"),
    twitter: zod.string().startsWith("https://twitter.com"),
    interests: zod.array(zod.string())
});

function inputAuthSchemaValidation(req, res, next){
    const jsonPayload = req.body;
    if(!inputAuthenticationSchema.safeParse(jsonPayload).success){
        return res.status(401).json({
            msg: "Input authentication pattern does not match the required"
        })
    }

    return next();
}

module.exports = inputAuthSchemaValidation;