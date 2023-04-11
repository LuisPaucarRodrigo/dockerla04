// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Luis Paucar Rodrigo\n');
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);