const SP = require("../subPage/sp.model");
const Page = require("./page.model");
const { generatePageSlug } = require("./page.service");

const createPage = async (req, res) => {
  try {
    const slug = await generatePageSlug(req.body.name);
    const newData = req.body;
    newData["slug"] = slug;
    const newValues = new Page(newData);
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

const getPage = async (req, res) => {
  try {
    const result = await Page.findOne({ _id: req.params.id });
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

const getPages = async (req, res) => {
  try {
    const result = await Page.find({}).sort({ _id: -1 });

    if (result) {
      const pages = await Promise.all(
        result?.map(async (page) => {
          const subPages = await SP.find({
            page: page._id,
            // status: true,
          });
          return { ...page.toObject(), subPages };
        })
      );
      res.status(200).json({
        success: true,
        message: "Data Retrieve Success!",
        data: pages,
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

const updatePage = async (req, res) => {
  try {
    const newData = req.body;
    if (req.file) {
      newData["image"] = req.file?.path;
    }
    const isExist = await Page.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Page.updateOne({ _id: req.params.id }, newData, {
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

const deletePage = async (req, res) => {
  try {
    const isExist = await Page.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await Page.deleteOne({ _id: req.params.id });
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
  createPage,
  getPage,
  getPages,
  updatePage,
  deletePage,
};
