const fs = require("fs")
const path = require("path")

const getKeys = function()
{
    const certificate = fs.readFileSync(path.join(__dirname, "certificate.pem"), {enconding: "utf8"})
     const    privateKey = fs.readFileSync(path.join(__dirname, "privateKey.pem"), {enconding: "utf8"})
    return { certificate, privateKey }
}

module.exports = getKeys