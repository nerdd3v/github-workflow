import express from "express";

const app = express();

app.get("/", (req, res)=>{
    return res.status(200).json({
        message:"jello world"
    })
})

app.listen(3000, ()=>{
    console.log("listening on 3000")
})