const { 
  insertCarController,
  getAllCarsController,
} = require('../controllers/carsController');

const cars_router = require('express').Router();

cars_router.post(
  '/',
  insertCarController
);

cars_router.get('/', getAllCarsController);

// cars_router.get('/:id',);

// cars_router.put('/:id',);

// cars_router.delete('/:id',);

module.exports = cars_router;
