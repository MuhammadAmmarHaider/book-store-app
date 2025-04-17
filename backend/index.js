const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")

const port = process.env.PORT || 5000
const mongoose = require("mongoose")

const bookRoutes = require("./src/books/book.route")
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use("/api/books",bookRoutes)

app.get("/",(req,res)=>{
    res.send("welcome to book store server")
})


async function main()
{
    await mongoose.connect(process.env.DB_URL)
    app.use("/",(req,res)=>{
        res.send("Book store server is running!")
    })
}

main()
.then(()=>console.log("Mongodb connected successfully"))
.catch(err=>console.log(err))

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})




