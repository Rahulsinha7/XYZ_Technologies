const express=require('express');
const authRouter=express.Router();
const contactus=require('../controllers/userAuthenticate');
// const User=require('../models/user');

authRouter.post('/contact',contactus);

module.exports=authRouter;