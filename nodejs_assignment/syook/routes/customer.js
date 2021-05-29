const express = require('express');
const {
  getCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  loginCustomer,
  getCustomerProfile,
} = require('../controllers/customer.js');
const { auth, authorize } = require('../middleware/auth');

const customerRouter = express.Router();

customerRouter.route('/login').post(loginCustomer);
customerRouter.route('/me').get(auth, getCustomerProfile);

customerRouter.route('/').get(getCustomer).post(createCustomer);
customerRouter
  .route('/:id')
  .get(getCustomerById)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = customerRouter;
