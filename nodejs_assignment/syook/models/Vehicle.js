const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      unique: true,
      required: [true, 'Please provide the Registration Number of Vehicle'],
    },

    vehicleType: {
      type: String,
      required: [true, 'Please provide the vehicle type'],
    },

    city: {
      type: String,
      required: [true, 'Please provide the city for the vehicle'],
    },

    activeOrdersCount: {
      type: Number,
      default: 0,
      min: [0, `Active Orders count can't be less than 0`],
      max: [2, `Active Orders count can't be grater than 2`],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Vehicle = mongoose.model('Vehicle', VehicleSchema);
module.exports = Vehicle;
