const validator=require('validator');

const validate=(data)=>{
    const mandatoryField=['fullName','emailId','phonenumber'];

    const IsAllowed=mandatoryField.every((k)=>Object.keys(data).includes(k));
    if(!IsAllowed){
       throw new Error("Missing mandatory fields");
    }
    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid email format");

    if (!validator.isMobilePhone(String(data.phonenumber), 'any')) {
  throw new Error("Invalid phone number");
}


    if(data.fullName.length<3 || data.fullName.length>30)
        throw new Error("Full name must be between 3 and 30 characters");

};

module.exports=validate;