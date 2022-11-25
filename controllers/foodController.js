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

exports.getFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        food,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        food: food,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
