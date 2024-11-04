const User = require("../models/User")
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) =>{
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        //
    }
}