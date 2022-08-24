const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("<h1>Welcome home suraj,you are awesome<h1>");
})


app.listen(2424,()=>{
    console.log("server started on port 2424");
})