const db = require('../db');

const getCars = () => db.query('SELECT * FROM cars ORDER BY id');
const deleteCar = (id) => db.query('DELETE FROM cars WHERE id = $1', [id]);

async function changeStatusCar(id, s) {
  const newStatus = s.status;
  await db.query('UPDATE cars SET status = $1 WHERE id = $2', [newStatus, id]);
  return {
    code: 200,
    data: `Updated to ${newStatus}`,
  };
}


}

module.exports = {
  getCars,
  deleteCar,
  changeStatusCar,
};
