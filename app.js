const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('dotenv')
const { join } = require('path')
const mongoose = require('mongoose');

const env = process.env.NODE_ENV || "dev"
const configPath = join(__dirname, './Config', `.env.${env}`)

config({
    path: configPath
})

const product = require('./Routes/product'); // Imports routes for the products
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});