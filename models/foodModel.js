const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A food must have a name'],
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    required: [true, 'A food must have a price'],
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
