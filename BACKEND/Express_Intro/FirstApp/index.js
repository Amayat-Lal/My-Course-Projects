const express = require("express");
const app = express()
// console.dir(app)

app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!")
    res.send("Hello, We Got Your Request!")
})

app.listen(3000, () => {
    console.log("listning on port 3000!")
})