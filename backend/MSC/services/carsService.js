const carsModel = require("../models/carsModel");

const insertReturn = (info) => {
  return {
    type: 'Inserted',
    code: 'success',
    data: {
      info
    }
  }
}

const notFoundError = (info) => {
  return {
    type: 'Search',
    code: 'not found',
    data: {
      info
    }
  }
}

const insertCarServices = async (data) => {
  const inserted = await carsModel.insertCar(data);

  if (inserted.acknowledged === true) {
    const result = insertReturn(data.name);
    return result;
  };

  return {
    type: 'Inserted',
    code: 'failed',
    data: {
      info: inserted,
    }
  };
}

const getAllCarsServices = async () => {
  const cars = await carsModel.getAllCars();

  if (cars.length === 0) {
    const result = notFoundError(cars);
    return result;
  }

  return cars;
}

module.exports = {
  insertCarServices,
  getAllCarsServices,
}
