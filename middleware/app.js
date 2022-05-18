const http = require("http"),
       path = require("path")
const express = require("express")
const app = express()

app.use("/", express.static(path.join(__dirname, "client")))

app.get("/articles", (req, res)=>{
    res.send({
        name: "bild0",
        price: "1000$"
    })
})


const server = http.createServer(app)

server.listen(3000, ()=>{
    console.log("Server is running on Port 3000.")
})