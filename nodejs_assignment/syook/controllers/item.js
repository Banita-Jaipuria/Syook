const Item = require('../models/Item');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse.js');
const logger = require('../utils/logger');

/**
 *
 * @desc        Add Item
 * @route       POST /v1/item
 * @access      Private
 * @returns     Returns the Added Item
 */

const createItem = asyncHandler(async (req, res, next) => {
  const itemObj = {
    name: req.body.name,
    price: req.body.price,
  };

  const item = new Item(itemObj);
  await item.save();

  res.status(200).json({
    code: 200,
    message: 'Item Created Successfully',
    data: { item },
  });
});

/**
 *
 * @desc        Update Item
 * @route       PUT /v1/item/:id
 * @access      Private
 * @returns     Returns the Updated Item
 */

const updateItem = asyncHandler(async (req, res) => {
  const itemObj = {
    name: req.body.name,
    price: req.body.price,
  };

  const existingItem = await Item.findById({
    _id: req.params.id,
  }).lean();

  if (!existingItem) {
    return next(new ErrorResponse(`No customer found`, 404));
  }

  const item = await Item.findByIdAndUpdate({ _id: req.params.id }, itemObj, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    code: 200,
    message: 'Item updated successfully',
    data: item,
  });
});

/**
 *
 * @desc        Get all Items
 * @route       GET api/v1/items
 * @access      Public
 * @returns     Returns all the Brands with Pagination
 */
const getItems = asyncHandler(async (req, res, next) => {
  const items = await Item.find().lean();

  return res.status(200).json({
    code: 200,
    message: 'Item List',
    data: items,
  });
});

/**
 *
 * @desc        Get a Item Details By ID
 * @route       GET api//v1/item/:id
 * @access      Private
 * @returns     Returns a Message of Successful
 */

const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById({ _id: req.params.id }).lean();

  if (!item) {
    return next(new ErrorResponse(`No item found`, 404));
  }

  return res.status(200).json({
    message: 'Item fetched successfully',
    data: item,
  });
});

/**
 *
 * @desc        Delete a Category
 * @route       POST /v1/admin/categories/:id
 * @access      Private
 * @returns     Returns a Message of Successful
 */

const deleteItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById({ _id: req.params.id });
  if (!item) {
    return next(new ErrorResponse(`No item found`, 404));
  }

  await item.remove();

  return res.status(200).json({
    code: 200,
    message: 'Item deleted successfully',
    data: {},
  });
});

module.exports = {
  createItem,
  updateItem,
  getItems,
  getItemById,
  deleteItemById,
};
