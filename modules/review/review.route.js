const express = require("express");
const { upload, handleMulterError } = require("../../config/multerConfig");
const {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
} = require("./review.controller");
const router = express.Router();

router.post("/create", upload.single("image"), handleMulterError, createReview);
router.get("/", getReviews);
router.get("/:id", getReview);
router.patch("/:id", upload.single("image"), handleMulterError, updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
