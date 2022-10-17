// require('dotenv').config();
const express = require('express');
const { notFoundHandler, errorHandler } = require('./error');
const middleware = require('./middleware');
const router = require('./routes');

const app = express();

// const myDB = require('../db/db');
// myDB.create('user-1', 10);
// myDB.create('user-2', 10);
// myDB.create('user-3', 10);
// myDB.create('user-4', 10);
// myDB.create('user-5', 10);
// myDB.bulkCreate('user-6', 10, 5);

// const tickets = myDB.find();
// console.log('all tickets', tickets);

// const winners = myDB.draw(10);
// console.log('winners', winners);

app.use(middleware)
app.use(router)
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;