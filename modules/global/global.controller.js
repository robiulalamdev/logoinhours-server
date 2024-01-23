const Global = require("./global.model");

const globalToggle = async (req, res) => {
  try {
    const isExist = await Global.findOne();
    const newData = JSON.parse(req.body?.newData) || null;
    if (req.files) {
      if (req.files?.logo) {
        newData["logo"] = req.files?.logo[0]?.path;
      }
    }
    if (isExist) {
      const result = await Global.updateOne({}, newData, { new: true });
      res.status(200).json({
        success: true,
        message: "Data Update Success!",
        data: result,
      });
    } else {
      const newValues = new Global(newData);
      const result = await newValues.save();
      res.status(200).json({
        success: true,
        message: "Data Save Success",
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

const getGlobal = async (req, res) => {
  try {
    const result = await Global.findOne();
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

const updateGlobal = async (req, res) => {
  try {
    const isExist = await Global.findOne();
    if (isExist) {
      const result = await Global.updateOne({}, req.body, { new: true });
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

module.exports = {
  globalToggle,
  getGlobal,
  updateGlobal,
};
