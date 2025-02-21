const express=require("express");
const app=express();

//middleware->response send
app.use((req,res,next) => {
    console.log("Hi i am 1st Middleware ");
    return next();
    console.log("This is after next");
});

app.use((req,res,next) => {
    console.log("Hi i am 2nd Middleware ");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random",(req,res)=>{
    res.send("this is random page");
});

app.listen(8080,()=>{
    console.log("server is listening to port:8080"