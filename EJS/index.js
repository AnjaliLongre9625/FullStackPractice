const express=require("express");
const app=express();

const port=8080;

app.set("viewengine","ejs");


app.get("/",(req,res)=>{
    res.send("this is root");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
