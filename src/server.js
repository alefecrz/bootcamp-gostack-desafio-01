const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const result = dotenv.config();

const router = require('./routes');

const server = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
  , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(router);

server.listen(3000);