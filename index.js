const mongoose=require("mongoose");
const express=require("express");
const studentRoute=require("./controller/studentRoute");
const cors=require("cors")
const bodyParser=require("body-parser");

//mongodb atlas connection
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.6bzqzwz.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("connected"));
db.on("error",()=>console.log("error occured"));
//creating an app
const app=express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/students",studentRoute);

//listening to a port no
app.listen(4000,()=>{
    console.log("server started at 4000");
})