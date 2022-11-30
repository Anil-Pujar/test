const express = require('express')
const app = express()


app.get('/get', (req, res) => {
    res.send("get requeste completed")
})



app.use((req, res) => {
    res.send(" no routes found")
})

app.listen(3000,  () => {
    console.log("sever started on port 3000")
})