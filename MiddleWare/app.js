const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        return next();
    }
    next(new ExpressError(401, "ACCESS DENIED!")); // Use custom error class
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random",(req,res)=>{
    res.send("this is random page");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("server is listening to port:8080");
});