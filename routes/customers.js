const errors = require('restify-errors');
const Customer = require('../models/Customer');

module.exports = server => {
  //Get All Customers
server.get('/customers', async (req, res, next) => {
  try {
    const customers = await Customer.find({});
    res.send(customers);
    next();
  } catch(err) {
    return next(new errors.InvalidContentError(err));
  }
});

//Get Single Customer
server.get('/customer/:id', async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.send(customer);
    next();
  } catch(err) {
    return next(new errors.ResourceNotFoundError(`No customer with the id of ${req.params.id}`));
  }
});

// Update Customer
server.put('/customers/:id', async (req, res, next) => {
  if(req.is('application/json')) {
      return next(new errors.InvalidContentError("Expects 'application/json'"));
  }
  try {
    const newCustomer = await customer.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(201);
    next();
  } catch(err) {
    return next(new errors.ResourceNotFoundError(`No customer with the id of ${req.params.id}`));
  }
});

//Add Customer
server.post('/customers', async (req, res, next) => {
  if(req.is('application/json')) {
      return next(new errors.InvalidContentError("Expects 'application/json'"));
  }
  const { name, email, balance } = req.body;
  const customer = new Customer ({
    name,
    email,
    balance,
  });
  try {
    const newCustomer = await customer.save();
    res.send(201);
    next();
  } catch(err) {
    return next(new errors.InternalError(err.message));
  }
});

//Delete Customer
server.del('/customer/:id', async (req, res, next) => {
  try {
    const customer = await Customer.findByIdAndRemove({ _id: req.params.id });
    res.send(204);
    next();
  } catch(err) {
    return next(new errors.ResourceNotFoundError(`No customer with the id of ${req.params.id}`));
  }
});
};