const { Router } = require('express');
const inputAuthSchemaValidation = require("../middlewares/inputAuthValidation");
const signAuthSchemaValidation = require("../middlewares/signAuthValidation");
const checkUserNotExists = require("../middlewares/checkUserNotExists");
const checkUserExits = require("../middlewares/checkUserExists");
const userAuthorization = require("../middlewares/userAuthorization")
const { Card, User } = require('../db/script');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = Router();
const secretKey = process.env.JWT_SECRET_STRING;

router.post("/signup", signAuthSchemaValidation, checkUserNotExists, async (req, res)=>{
    const jsonPayload = req.body;

    const response = await User.create(jsonPayload);

    if(!response){
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Account Created Successfully"
    });
})

router.post("/signin", signAuthSchemaValidation, checkUserExits, async (req, res)=>{
    const jsonPayload = req.body;

    try{
        const signature = jwt.sign({email: jsonPayload.email}, secretKey);
        const token = "Bearer " + signature;

        return res.status(200).json({
            msg: "User signed-in successfully",
            token: token
        });
    }
    catch(e){
        return res.status(500).json({
            msg: "Internal Server Error in signing-in"
        });
    }
})

router.post("/card",inputAuthSchemaValidation, userAuthorization, async (req,res)=>{
    const json = req.body;
    const response = await Card.create(json);

    if(!response){
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Card Created Successfully",
        cardId: response._id
    });
})

router.get("/card/:cardId", async (req, res)=>{
    const cardId = req.params.cardId;

    const card = await Card.findOne({_id: cardId});

    if(!card){
        return res.status(204).json({
            msg: "Card does not exists"
        })
    }

    return res.status(200).json({
        cardDetails: card
    });

})

router.use((err, req, res, next)=>{
    res.status(500).json({
        msg: "Internal Server Error"
    })
})

module.exports={
    cardRoutes: router
}