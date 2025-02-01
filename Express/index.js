const express = require('express')
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})
app.get("/",(req,res)=>{
    res.send("hello i am root");
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`welcome to page of @${username}.`);
});

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no results");
// });

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`these are the search results:${q}`);
});




// app.use((req,res)=>{
//     console.log(req);
//     console.log("request received");
//     res.send("this is a basic response");
//     res.send({
//         name:"anjali",
//         color:"red",
//     })
//     let code="<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// // });

// app.get("/",(req,res)=>{
//     res.send("hello i am root");
// });
// app.get("/apple",(req,res)=>{
//     res.send("u contacted apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("u contacted orange path");
// });
// app.get("*",(req,res)=>{
//     res.send("path does not exist");
// });

// app.post("/",(req,res)=>{
//     res.send("u sent a post");
// });


