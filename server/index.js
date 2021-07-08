const express = require('express');
const app = express();
const PORT = 3000;
const { addUser, addLog, updateLog, getCurrentLog, getAllLogs } = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', (req, res) => {
  let { name} = req.body;
  addUser(name, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post('/logs', (req, res) => {
  let { name, goal, actual } = req.body;
  addLog(name, goal, actual, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put('/logs', (req, res) => {
  let { name, goal, actual, date } = req.body;
  updateLog(name, goal, actual, date, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/current', (req, res) => {
  let { name, date } = req.body;
  getCurrentLog(name, date, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/logs', (req, res) => {
  let { name } = req.query;
  console.log(name);
  getAllLogs(name, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});