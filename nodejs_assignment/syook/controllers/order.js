const Vehicle = require('../models/Vehicle');
const Order = require('../models/Order');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');
const logger = require('../utils/logger');

const addOrder = asyncHandler(async (req, res) => {
  // Check if vehicles are available
  const vehiclesAvailable = await Vehicle.find({
    $or: [
      {
        activeOrdersCount: { $gte: 0 },
        activeOrdersCount: { $lte: 2 },
      },
    ],
  }).lean();

  if (!vehiclesAvailable) {
    return next(
      new ErrorResponse(`No delivery vehicle is available for delivery`, 422)
    );
  }

  //   Select delivery vehicle
  const selectDeliveryVehicle = vehiclesAvailable.find(
    (el) => el.city.toLowerCase() === req.user.city.toLowerCase()
  );

  if (!selectDeliveryVehicle) {
    return next(
      new ErrorResponse(
        `No delivery vehicle is available for your location`,
        422
      )
    );
  }

  const orderNumber = await Order.generateOrderNumber();

  const createOrder = {
    orderNumber,
    itemId: req.body.itemId,
    price: req.body.price ? parseInt(req.body.price, 10) : null,
    customerId: req.user.id,
    deliveryVehicleId: selectDeliveryVehicle._id,
  };

  const newOrder = await Order.create(createOrder);

  return res.status(201).json({
    message: 'Orders added',
    data: newOrder,
  });
});

const deliverOrder = asyncHandler(async (req, res) => {
  let order = await Order.findById({ _id: req.params.id });

  if (!order) {
    return next(new ErrorResponse(`Please select a valid order`, 404));
  }

  order.isDelivered = true;
  order = await vehicle.save();

  return res.status(200).json({
    code: 200,
    message: 'Order delivered successfully',
    data: order,
  });
});

module.exports = {
  addOrder,
  deliverOrder,
};
