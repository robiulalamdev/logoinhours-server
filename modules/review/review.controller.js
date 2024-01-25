const Review = require("./review.model");

const createReview = async (req, res) => {
  try {
    const newData = req.body;
    if (req.file) {
      newData["image"] = req.file?.path;
    }
    const newValues = new Review(newData);
    const result = await newValues.save();
    res.status(200).json({
      success: true,
      message: "Data Save Success",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Retrieve Failed!",
      error_message: error?.message,
    });
  }
};

const getReview = async (req, res) => {
  try {
    const result = await Review.findOne({ _id: req.params.id });
    if (result) {
      res.status(200).json({
        success: true,
        message: "Data Retrieve Success!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Data Not Found",
        data: result,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Retrieve Failed!",
      error_message: error?.message,
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const result = await Review.find({}).sort({ _id: -1 });
    if (result) {
      res.status(200).json({
        success: true,
        message: "Data Retrieve Success!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Data Not Found",
        data: result,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Retrieve Failed!",
      error_message: error?.message,
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const newData = req.body;
    if (req.file) {
      newData["image"] = req.file?.path;
    }
    const isExist = await Review.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Review.updateOne({ _id: req.params.id }, newData, {
        new: true,
      });
      res.status(200).json({
        success: true,
        message: "Data Update Success!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Data Not Found",
        data: result,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Update Failed!",
      error_message: error?.message,
    });
  }
};

const deleteReview = async (req, res) => {
  // console.log(req.params);
  try {
    const isExist = await Review.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Review.deleteOne({ _id: req.params.id });
      res.status(200).json({
        success: true,
        message: "Data Removed Success!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "Data Not Found",
        data: result,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Removed Failed!",
      error_message: error?.message,
    });
  }
};

module.exports = {
  createReview,
  getReview,
  getReviews,
  updateReview,
  deleteReview,
};
