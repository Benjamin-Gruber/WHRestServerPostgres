const asyncHandler = require('express-async-handler');
const model = require('../model/cars');

const getCars = asyncHandler(async (req, res) => res.status(200).json(await model.getCars()));
const deleteCar = asyncHandler(async (req, res) =>
  res.status(200).json(await model.deleteCar(req.params.id)),
);

module.exports = {
  getCars,
  deleteCar,
};
