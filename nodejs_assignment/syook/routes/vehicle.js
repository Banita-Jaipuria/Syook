const express = require('express');
const {
  addVehicle,
  updateVehicle,
  getVehicles,
  getVehicleById,
  deleteVehicleById,
} = require('../controllers/vehicle');

const vehicleRouter = express.Router();

vehicleRouter.route('/').get(getVehicles).post(addVehicle);
vehicleRouter
  .route('/:id')
  .get(getVehicleById)
  .put(updateVehicle)
  .delete(deleteVehicleById);

module.exports = vehicleRouter;
