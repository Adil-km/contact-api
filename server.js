const express = require("express");
const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

app.get('/api/contacts',(req,res)=>{

    res.status(200).json({message:"Getting all the contacts"})
})

app.listen(port,()=>{   
    console.log(`server is running on port ${port}`);

});