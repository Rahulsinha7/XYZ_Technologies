const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    fullName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    emailId:{
        type:String,
        required:true,
        unique:true, 
        trim:true,
        lowercase:true,
        immutable:true
    },
    phonenumber:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
        maxLength:10
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }

},{timestamps:true});

const User=mongoose.model("user",userSchema);

module.exports=User;