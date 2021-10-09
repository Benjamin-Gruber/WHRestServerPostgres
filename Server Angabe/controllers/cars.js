const asyncHandler = require('express-async-handler');
const model = require('../model/cars');

const getCars = asyncHandler(async (req, res) => res.status(200).json(await model.getCars()));
const deleteCar = asyncHandler(async (req, res) =>
  res.status(200).json(await model.deleteCar(req.params.id)),
);
const changeStatusCar = asyncHandler(async (req, res) =>
  res.status(200).json(await model.changeStatusCar(req.params.id, req.body)),
);
const addCar = asyncHandler(async (req, res) => res.status(200).json(await model.addCar(req.body)));

module.exports = {
  getCars,
  deleteCar,
  changeStatusCar,
  addCar,
};
