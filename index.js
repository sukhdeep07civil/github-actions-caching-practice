import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})