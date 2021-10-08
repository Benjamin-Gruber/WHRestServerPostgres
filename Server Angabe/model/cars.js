const db = require('../db');

const getCars = () => db.query('SELECT * FROM cars');

module.exports = {
  getCars,
};
