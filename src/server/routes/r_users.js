const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const User = require("../models/m_user");
const Contact = require("../models/m_contacts");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const checkJwt = require('express-jwt');

router.use(
    checkJwt({secret:process.env.JWT_SECRET}).unless({path:['/user/authenticate']})
);

router.use((err,req,res,next) => {
    if(err.name == 'UnauthorizedError'){
        res.status(401).send({error:err.message})
    }
})

router.get("/",(req,res) => {
    res.json({"data":"welcome"})
})

router.post("/contact",(req,res) => {
    

    let promise = Contact.find().exec();

    promise.then((contacts) => {
        res.json({"data":contacts})
    })
    .catch((err) => {
        res.json(err)
    })

})

router.post('/authenticate', (req,res) => {
    const user = req.body;
    
    let userPromise = User.findOne({username:user.name}).exec();

    userPromise.then((result) => {
        if(user == null){
            res.status(404).json({"success":false})
        }else{
            console.log(user.pass,result.password)
            if(!bcrypt.compareSync(user.pass,result.password)){
                res.status(401).json({"success":false,message:"Invalid User/Password"})
                console.log("not matched")
            }else{
                console.log("matched")
                const payload = {
                    username : result.username,
                    admin : result.admin
                }

                const token = jwt.sign(payload,process.env.JWT_SECRET,{
                    expiresIn:'4h'
                })

                res.status(200).json({"success":true,"data":result,"token":token})
            }
            
        }
    })
    .catch((err) => {
        res.json(err);
    })

})

module.exports = router;