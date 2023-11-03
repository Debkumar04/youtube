const express=require("express");
const req = require("express/lib/request");

const videoRouter=express.Router();

a=[];

videoRouter.get('/video',(req,res)=>{
    res.send(a);
});
videoRouter.post('/video',(req,res)=>{
    a.push(1);
    res.send(a);
});
videoRouter.delete('/video',(req,res)=>{
    a.pop();
    res.send(a);
});
videoRouter.put('/video',(req,res)=>{
    a[0]=2;
    res.send(a);
});



// videoRouter.get("/video", (req,res)=>
// {
//     res.send("hello from router");
// });


module.exports= videoRouter;