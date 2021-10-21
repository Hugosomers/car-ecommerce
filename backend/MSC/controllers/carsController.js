const carsService = require("../services/carsService");

const insertCarController = async (req, res, next) => {
  const data = req.body;

  const inserted = await carsService.insertCarServices(data);
  if (inserted.code === 'success') {
    return res.status(201).json(inserted);
  }

  return res.status(422).json(inserted);
}

const getAllCarsController = async (req, res, next) => {
  const results = await carsService.getAllCarsServices();

  if (results.code === 'not found') {
    return res.status(404).json(results);
  }

  return res.status(200).json(results);
}

module.exports = {
  insertCarController,
  getAllCarsController,
}
