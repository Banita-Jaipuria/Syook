const Vehicle = require('../models/Vehicle');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');
const { getRandomString } = require('../helpers/uniqueIdGenerator');
const logger = require('../utils/logger');

const addVehicle = asyncHandler(async (req, res) => {
  const { vehicleType, city } = req.body;

  if (req.body.activeOrdersCount) {
    return next(new ErrorResponse(`Orders can't be added manually`, 400));
  }

  const vehicleObj = {
    registrationNumber: getRandomString(10),
    vehicleType,
    city,
  };

  const vehicle = await new Vehicle(vehicleObj).save();

  return res.status(201).json({
    message: 'Vehicle added',
    data: vehicle,
  });
});

const updateVehicle = asyncHandler(async (req, res) => {
  if (req.body.activeOrdersCount) {
    return next(new ErrorResponse(`Orders can't be added manually`, 400));
  }

  const { registrationNumber, vehicleType, city } = req.body;

  const vehicleObj = {
    registrationNumber,
    vehicleType,
    city,
  };

  const existingVehicle = await Vehicle.findById({
    _id: req.params.id,
  }).lean();

  if (!existingVehicle) {
    return next(new ErrorResponse(`No vehicle found`, 404));
  }

  const vehicle = await Vehicle.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    vehicleObj,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({
    code: 200,
    message: 'Vehicle Updated',
    data: vehicle,
  });
});

const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find({}).lean();

  if (!vehicles) {
    return next(new ErrorResponse(`No vehicle found`, 404));
  }

  return res.status(200).json({
    code: 200,
    message: 'Vehicles Fetched successfully',
    data: vehicles,
  });
});

const getVehicleById = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById({ _id: req.params.id }).lean();
  if (!vehicle) {
    return next(new ErrorResponse(`No vehicle found`, 404));
  }
  return res.status(201).json({
    message: 'Vehicle fetched successfully',
    data: vehicle,
  });
});

const deleteVehicleById = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.findById({ _id: req.params.id });

  if (!vehicle) {
    return next(new ErrorResponse(`No vehicle found`, 404));
  }

  await vehicle.remove();

  return res.status(200).json({
    code: 200,
    message: 'Vehicle deleted successfully',
    data: {},
  });
});

module.exports = {
  addVehicle,
  updateVehicle,
  getVehicles,
  getVehicleById,
  deleteVehicleById,
};
