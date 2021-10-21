const express = require('express');
const cars_router = require('./MSC/routes/cars_router');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/cars', cars_router);

app.listen(PORT, () => console.log('Online'))
