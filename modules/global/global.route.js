const express = require("express");
const { upload, handleMulterError } = require("../../config/multerConfig");
const {
  globalToggle,
  getGlobal,
  updateGlobal,
} = require("./global.controller");
const router = express.Router();

// routes
router.post(
  "/toggle",
  upload.fields([{ name: "logo", maxCount: 1 }]),
  handleMulterError,
  globalToggle
);
router.get("/", getGlobal);
router.patch("/", updateGlobal);
// router.delete("/", )

module.exports = router;
