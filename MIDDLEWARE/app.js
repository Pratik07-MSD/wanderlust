const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");
// app.use((req,res,next)=>{
//     console.log("Hi I am a 1st middleware");
//     next();
// });

//  app.use("/random",(req,res,next)=>{
//      console.log("Hi I am a 2nd middleware");
//      next();
//  });

// loggers

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now().toString());
//     console.log(req.method,req.time);
//     next();
// })

// api token

const checkToken=(req,res,next)=>{
    let{token}=req.query;
    if(token==="giveaccess"){
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
}
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});
app.get("/",(req,res)=>{
    res.send("hi I am a root");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});

//error handling
app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    console.log("-------ERROR_1-------");
    res.send(err);
});


app.listen(8080,()=>{
    console.log("server is listining to port 8080");
})