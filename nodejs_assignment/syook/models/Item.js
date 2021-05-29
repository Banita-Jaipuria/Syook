const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the item name'],
    },

    price: {
      type: Number,
      required: [true, 'Please provide the item price'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
