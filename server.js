const express = require("express");
const { resolve } = require("path");
const app=express();
const path =require("path");
const ejs=require("ejs")
 app.use(express.json())
 const connectDB=require("./server/database/connection");
 const dotenv = require("dotenv");

dotenv.config();
 

 const PORT=process.env.PORT || 8080
 app.use(express.urlencoded({extended:true}));


 connectDB();
//view engines
app.set('view engine','ejs')


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'))

app.listen(PORT,()=> console.log(`server started succesfully on port ${PORT}` ))

