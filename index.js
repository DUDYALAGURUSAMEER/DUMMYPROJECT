const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./studentRoutes/studentRoutes");
const cors = require("cors");



// initiate express
const app = express();

mongoose.set("strictQuery",true) // capital and small letters differentiated for true value

mongoose.connect("mongodb+srv://gurusameer08:sameer@cluster0.iu9neyl.mongodb.net/School");

const db = mongoose.connection;

// handle the connection

db.on("open",()=>{
    console.log("database connected");
})

db.on("error",(err)=>{
    console.log("error in connecting database"+err);
})


// convert to json


app.use(express.json());
app.use(cors());


const port = 5500;
app.use("/Students",studentRoute);
app.listen(port,()=>{
    console.log("server started on "+port);
})


