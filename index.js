const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Covert-Comms!');
});

const server = app.listen(3000, () => {
    console.log('DApp running on port 3000');
});

module.exports = server;