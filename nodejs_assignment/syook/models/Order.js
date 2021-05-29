const mongoose = require('mongoose');
const { intTo4digitsString } = require('../helpers/uniqueIdGenerator');

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
    },

    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: [true, 'Please select an item to order'],
    },

    price: {
      type: Number,
      required: [true, 'Please provide the total price'],
    },

    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: [true, 'Please login to place order'],
    },

    deliveryVehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      required: [true, 'There is no vehicle to full fill your order'],
    },

    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

OrderSchema.statics.generateOrderNumber = async function () {
  const lastOrder = await this.find({}, { orderNumber: 1 });
  const base = lastOrder.length >= 1 ? lastOrder.pop().orderNumber : '0000';

  let ans = parseInt(base, 10) + 1;
  ans = intTo4digitsString(ans);

  return ans;
};

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
