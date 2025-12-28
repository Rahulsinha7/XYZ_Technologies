const express=require('express');
const app=express();
require('dotenv').config();
const main=require('./config/db');
const cookieparser=require('cookie-parser');
const cors=require('cors');

const userAuthRouter=require('./routes/userAuth');

app.use(cors({
    origin:' http://localhost:5173',
    credentials:true,
}))




app.use(express.json());
app.use(cookieparser());

app.use('/user',userAuthRouter);

main()
.then(async()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
})

})

.catch(err=>console.log("Error Occurred: "+err));