const db = require('../db');

const getCars = () => db.query('SELECT * FROM cars');
const deleteCar = (id) => db.query('DELETE FROM cars WHERE id = $1', [id]);

module.exports = {
  getCars,
  deleteCar,
};
