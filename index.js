const express = require('express');

const app = express();
const productRoutes = require('./src/routes/product');

app.use('/', productRoutes);
app.listen(4000);