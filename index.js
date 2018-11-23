const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello Covert-Comms!')
})

app.listen(3000, function() {
    console.log('DApp listening on port 3000!')
})