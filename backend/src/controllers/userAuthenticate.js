const User=require('../models/user');
const validate=require('../utils/validator');

const contactus=async (req,res)=>{
    try{

        validate(req.body);

        const {fullName,emailId,phonenumber}=req.body;




       const user= await User.create(req.body);
        res.status(201).json({
      success: true,
      message: "Details saved successfully, We will contact you soon",
      data: user
    });

    }
    catch(err){
        res.status(400).send("Error: "+err);

    }

}
module.exports=contactus;