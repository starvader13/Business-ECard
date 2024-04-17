const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URL_STRING;
mongoose.connect(connectionString).then(()=>{
    console.log("Connection Successful");
}).catch(()=>{
    console.log("Connection Failed");
});

const userDbSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const cardDbSchema = new mongoose.Schema({
    name: String,
    description: String,
    linkedin: String,
    twitter: String,
    interests: [
        {type: String}
    ]
})

const User = mongoose.model('User', userDbSchema)
const Card = mongoose.model('Card', cardDbSchema);

module.exports = {
    Card,
    User
}