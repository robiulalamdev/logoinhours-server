const express = require("express");
const {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
} = require("./category.controller");
const { upload, handleMulterError } = require("../../config/multerConfig");
const router = express.Router();

router.post(
  "/create",
  upload.single("image"),
  handleMulterError,
  createCategory
);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
