const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./send-mail.js');

const app = express();

const jsonParser = bodyParser.json();

app.post('/form-submit', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  sendMail(req.body);
  res.send({ response: 'OK' });
});

module.exports = app;
