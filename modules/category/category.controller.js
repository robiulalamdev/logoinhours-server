const Category = require("./category.model");

const createCategory = async (req, res) => {
  try {
    const newData = req.body;
    if (req.file) {
      newData["image"] = req.file?.path;
    }
    const newValues = new Category(newData);
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

const getCategory = async (req, res) => {
  try {
    const result = await Category.findOne({ _id: req.params.id });
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

const getCategories = async (req, res) => {
  try {
    const result = await Category.find({}).sort({ _id: -1 });
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

const updateCategory = async (req, res) => {
  try {
    const newData = req.body;
    if (req.file) {
      newData["image"] = req.file?.path;
    }
    const isExist = await Category.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Category.updateOne({ _id: req.params.id }, newData, {
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

const deleteCategory = async (req, res) => {
  // console.log(req.params);
  try {
    const isExist = await Category.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Category.deleteOne({ _id: req.params.id });
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
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
