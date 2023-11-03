const express=require("express");
const videoRouter=require("./routes/videoRoutes");//
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtube").then(()=>{

     console.log("db connected");

});

const app=express();

app.use(express.json());
app.use(videoRouter);    //

// const deb=[
//     {
//         title: 'what about today',
//         author: 'code-with-harry',
//         url: 'google.com'
//     },
//     {
//         title: 'who are you',
//         author: 'love babbar',
//         url: 'google.com'
//     },
//     {
//         title: 'the cpp',
//         author: 'lakshay',
//         url: 'google.com'
//     }
// ]



// app.get('/video' , (req,res)=>{  //function () or ()=>

//     res.send(deb);
// });

// app.post('/video' , (req,res)=>{
    
//     console.log(req.body);
//     // res.send(deb);
// });


app.listen(1000, onServerStart);

function onServerStart(){

    console.log("server started");
}