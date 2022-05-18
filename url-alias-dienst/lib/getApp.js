const express = require("express")

const getApp = function() {
    const app = express()

    app.get("/:alias", (req, res) =>{
        res.redirect("https://www.google.de")
    })
    
    return app
}

module.exports = getApp