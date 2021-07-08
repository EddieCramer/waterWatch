const { pool } = require('../config.js');

const addUser = (name, callback) => {
  let queryArgs = [name];
  let queryString = `
    INSERT INTO users(name)
    VALUES ($1)
    ON CONFLICT (name) DO NOTHING;
  `;

  pool.query(queryString, queryArgs, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addLog = (name, goal, actual, callback) => {
  let queryArgs = [name, goal, actual];
  let queryString = `
    INSERT INTO logs (user_id, goal, actual)
    VALUES ((SELECT id FROM users WHERE name = $1), $2, $3);
  `;

  pool.query(queryString, queryArgs, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const updateLog = (name, goal, actual, date, callback) => {
  let queryArgs = [name, goal, actual, date];
  let queryString = `
    UPDATE logs
    SET goal = $2, actual = $3
    WHERE user_id = (SELECT id FROM users WHERE name = $1) AND date = $4;
  `;

  pool.query(queryString, queryArgs, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getCurrentLog = (name, date, callback) => {
  let queryArgs = [name, date];
  let queryString = `
    SELECT * FROM logs
    WHERE user_id = (SELECT id FROM users WHERE name = $1) AND date = $2
    LIMIT 1;
  `;

  pool.query(queryString, queryArgs, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getAllLogs = (name, callback) => {
  let queryArgs = [name];
  let queryString = `
    SELECT date, goal, actual FROM logs
    WHERE user_id = (SELECT id FROM users WHERE name = $1)
    ORDER BY date ASC
    LIMIT 30;
  `;

  pool.query(queryString, queryArgs, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  addUser,
  addLog,
  updateLog,
  getCurrentLog,
  getAllLogs
};