const express=require("express");
const app=express();

//middleware->response send
// app.use((req,res,next) => {
//     console.log("Hi i am 1st Middleware ");
//     next();
// });

// app.use((req,res,next) => {
//     console.log("Hi i am 2nd Middleware ");
//     next();
// });

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.use("/random",(req,res,next)=>{
    console.log("I am only for random");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random",(req,res)=>{
    res.send("this is random page");
});


//logger-morgan
app.use((req,res,next) => {
    req.time= new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});

//404
app.use((req,res) => {
    res.send("Page not found");
});

app.listen(8080,()=>{
    console.log("server is listening to port:8080");
});