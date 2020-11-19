const express = require('express');
const morgan = require('morgan');
const views = require('./views/layout.js');
const router = express.Router();

const port = 3333;

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.send(views());
});

app.listen(port, () => {
    console.log('connected to 3333');
});