const express = require('express')
const app = express()

app.use('/api/test', (req, res) => {
    res.send("Server is testing")
})

app.listen(5000, console.log("Server started on port 5000"));