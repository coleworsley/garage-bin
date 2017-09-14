const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
