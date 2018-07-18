const express = require('express');
const app = express();
const databaseController = require('./controllers/databaseController');
const path = require('path'); 

app.use(express.static(__dirname + './../dist'));

app.get('/', databaseController.getRecipeBooksPerUser);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/index.html'));
});

app.listen(3000, (err, res) => {
  if (err) return err;
  console.log('Listening on port 3000!');
});

module.exports = app;