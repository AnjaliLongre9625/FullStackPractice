const express=require("express");
const app=express();

//middleware->response send

app.use((req,res) => {
    let { query }=req.query;
    console.log(query);
    console.log("Hi i am Middleware ");
    res.send("Middleware finished");
});

app.get("/",(req,res)=>{
    res.send("hi i am root");
});

app.get("/random",(req,res)=>{
    res.send("this is random page");
});

app.listen(8080,()=>{
 