const NetworkConnection = require("./NetworkConnection")
const networkConnection = new NetworkConnection({host: "www.thenativeweb.io", port:443 })

networkConnection.on("online", ()=>{
    console.log("online")
})
networkConnection.on("offline", ()=>{
    console.log("offline")
})