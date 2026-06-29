import express from "express";

const app = express();

app.use((req,res,next)=>{
    console.log("middleware executed");
    next();
});

app.get("/api/v1/health",(req,res)=>{
    res.status(200).json({
        status:true,
        message:"campusOS api is running"
    });
});

export default app;