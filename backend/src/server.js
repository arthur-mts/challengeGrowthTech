const express = require('express');

const cors = require('cors');

const DataService = require('./services/DataService');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use((err, req, res, next) => res.status(400).json({ message: err.message }));

app.listen(3333, () => {
  console.log('Server on!');
  DataService.updateDatabase();
});
