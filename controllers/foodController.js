const Food = require('../models/foodModel');

exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      status: 'success',
      data: {
        food: foods,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createFood = async (req, res) => {
  try {
    const newFood = await Food.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        food: newFood,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
