const express = require('express');
const morgan = require('morgan');

const foodRouter = require('./routes/foodRoutes');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Routes
app.use('/api/v1/foods', foodRouter);

module.exports = app;
