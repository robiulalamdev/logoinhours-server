const express = require("express");
const {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
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
router.patch("/:id", upload.single("image"), handleMulterError, updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
