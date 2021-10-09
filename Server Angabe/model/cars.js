const db = require('../db');

const getCars = () => db.query('SELECT * FROM cars ORDER BY id');

async function deleteCar(id) {
  const { rows } = await db.query('DELETE FROM cars WHERE id = $1', [id]);
  if (rows.lenght > 0) {
    return {
      code: 200,
      data: 'Delted',
    };
  }
  return {
    code: 404,
    data: `${id} was not found in the database`,
  };
}

async function changeStatusCar(id, s) {
  try {
    const newStatus = s.status;
    await db.query('UPDATE cars SET status = $1 WHERE id = $2', [newStatus, id]);
    return {
      code: 200,
      data: `Updated to ${newStatus}`,
    };
  } catch (error) {
    return {
      code: 500,
      data: `Car could not be updated. Error ${error.message}`,
    };
  }
}

async function getOwnerID(o) {
  const { rows } = await db.query('SELECT id FROM owner WHERE first_name = $1 AND last_name = $2', [
    o.firstName,
    o.lastName,
  ]);
  return rows[0].id;
}

async function addCar(c) {
  const { rows } = await db.query('SELECT MAX(id) AS max FROM cars');
  const newId = rows[0].max + 1;
  const owner = await getOwnerID(c.owner);

  await db.query(
    `INSERT INTO cars (id, title, image, status, price, miles, year_of_make, description, owner)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [newId, c.title, c.image, c.status, c.price, c.miles, c.year_of_make, c.description, owner],
  );
  return {
    code: 200,
    data: `Inserted ${newId}`,
  };
}

module.exports = {
  getCars,
  deleteCar,
  changeStatusCar,
  addCar,
};
