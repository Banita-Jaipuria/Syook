const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const { addOrder, deliverOrder } = require('../controllers/order');

const orderRouter = express.Router();

orderRouter.route('/').post(auth, addOrder);
orderRouter.route('/deliver').put(auth, deliverOrder);

// orderRouter
//   .route('/:id')
//   .get(getVehicleById)
//   .put(updateVehicle)
//   .delete(deleteVehicleById);

module.exports = orderRouter;
