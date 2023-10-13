const express = require('express')
const cors = require('cors')
const user = require('./Routes/route')
const cookieParser = require('cookie-parser')
const client=require("./db/connectToDb.js");
const app = express()


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello")
})




app.listen(3000,(req,res)=>{
    console.log("Server started")
})