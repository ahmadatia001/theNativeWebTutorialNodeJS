// Path Middleware dient dazu, dass ort von datein  bekommen
// man kommt auf der ort eines datei, in dem man "path.join(__dirname, ..)
// schreibt
// um es mit Express zu benutzen :

const path = require("path")

const datei = path.join(__dirname, "")

app.use("/", express.static(datei))


// body-parser middleware dient dazu, dass
// Zugriff auf Request data zu erstatten
// anhand body Attribute sowie daten typ wie json
// Beispiel: 
const bodyParser = require("body-parser")
const res = require("express/lib/response")
app.ues(bodyParser.json())

const user = req.body.user // user is object from client-side 




// Cookies schreiben
// dafür braucht man keine Middleware
// mann kann einfach cookies mit folgende Beispiel

res.cookie("user", "jane.doe", {
    maxAge: 24 * 60 * 60 * 100, // bis wann lauft es ab
    secure: true,   // werden versendet nur bei https connections
    httpOnly: true,  // nur bei http Verbindung und bei client-side kein Zugriff auf Cookies mit JavaScript
    signed: true   
})
//Cookies löschen
res.clearCookie("user")







