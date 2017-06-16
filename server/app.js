const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendMail = require('./mail/send-mail.js');

const app = express();

const jsonParser = bodyParser.json();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/form-submit', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  sendMail(req.body);
  res.send({ response: 'OK' });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
