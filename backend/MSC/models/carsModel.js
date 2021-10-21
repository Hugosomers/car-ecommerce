const connection = require('./connection');

const insertCar = async (infos) => {

  const data = await connection()
  .then((db) => db.collection('cars').insertOne(infos));

  return data;
}

const getAllCars = async () => {

  const data = await connection()
  .then((db) => db.collection('cars').find().toArray());
  
  return data;
};

module.exports = {
  insertCar,
  getAllCars,
};
