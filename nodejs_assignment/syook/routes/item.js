const express = require('express');

const itemRouter = express.Router();

const { createItem, getItems } = require('../controllers/item');

itemRouter.route('/').post(createItem).get(getItems);

// itemRouter.route('/:id').get(getSingleProduct);

module.exports = itemRouter;
