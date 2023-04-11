// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/clientes', (req, res) => {
  res.send('Esta es la ruta de clientes de la tienda de luis');
});

// Route for products
app.get('/productos', (req, res) => {
  res.send('Esta es la ruta de productos de paucar');
});

// Default route
app.get('/', (req, res) => {
  res.send('Luis paucar\n');
});

//Listen port
const PORT = 9000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);