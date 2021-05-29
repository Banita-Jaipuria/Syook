const Customer = require('../models/Customer');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');
const logger = require('../utils/logger');

const getCustomer = asyncHandler(async (req, res, next) => {
  const customers = await Customer.find({});
  res.status(200).json({
    code: 200,
    message: 'Customer Controller Working',
    data: { customers },
  });
});

const getCustomerById = asyncHandler(async (req, res, next) => {
  const customer = await Customer.findById({ _id: req.params.id });
  res.status(200).json({
    code: 200,
    message: 'Customer Controller Working',
    data: { customer },
  });
});

const createCustomer = asyncHandler(async (req, res, next) => {
  const customerObj = {
    name: req.body.name,
    city: req.body.city,
    email: req.body.email,
    password: req.body.password,
  };

  let customer = await Customer.create(customerObj);
  customer = customer.toObject();
  delete customer.password;

  res.status(200).json({
    code: 200,
    message: 'Customer Controller Working',
    data: customer,
  });
});

const updateCustomer = asyncHandler(async (req, res, next) => {
  const customerObj = {
    name: req.body.name,
    city: req.body.city,
  };

  const existingCustomer = await Customer.findById({
    _id: req.params.id,
  }).lean();

  if (!existingCustomer) {
    return next(new ErrorResponse(`No customer found`, 404));
  }

  const customer = await Customer.findByIdAndUpdate(
    { _id: req.params.id },
    customerObj,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    code: 200,
    message: 'Customer updated successfully',
    data: { customer },
  });
});

const deleteCustomer = asyncHandler(async (req, res, next) => {
  const existingCustomer = await Customer.findById({
    _id: req.params.id,
  });

  if (!existingCustomer) {
    return next(new ErrorResponse(`No customer found`, 404));
  }

  await existingCustomer.remove();

  res.status(200).json({
    code: 200,
    message: 'Customer deleted successfully',
    data: {},
  });
});

const loginCustomer = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const customer = await Customer.findOne({ email }).select('+password');

  if (!customer) {
    return next(new ErrorResponse(`Please enter valid credentials`, 400));
  }

  const isMatch = await customer.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse(`Please enter valid credentials`, 400));
  }

  const token = await customer.getSignedJwtToken();

  return res.status(200).json({
    code: 200,
    message: 'logged in successful',
    data: { customer, token },
  });
});

const getCustomerProfile = asyncHandler(async (req, res, next) => {
  console.log('Coming 116', req.user);

  const customer = await Customer.findById({ _id: req.user.id });

  res.status(200).json({
    code: 200,
    message: 'Customer profile',
    data: customer,
  });
});

module.exports = {
  getCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  loginCustomer,
  getCustomerProfile,
};
