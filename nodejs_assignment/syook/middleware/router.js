const customerRouter = require('../routes/customer');
const vehicleRouter = require('../routes/vehicle');
const itemRouter = require('../routes/item');
const orderRouter = require('../routes/order');

const routeLoader = (app) => {
  app.use('/api/v1/item', itemRouter);
  app.use('/api/v1/order', orderRouter);
  app.use('/api/v1/vehicle', vehicleRouter);
  app.use('/api/v1/customer', customerRouter);
};

module.exports = routeLoader;
