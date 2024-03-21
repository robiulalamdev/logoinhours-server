const express = require("express");
const {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
} = require("./page.controller");
const router = express.Router();

router.post("/create", createPage);
router.get("/", getPages);
router.get("/:id", getPage);
router.patch("/:id", updatePage);
router.delete("/:id", deletePage);

module.exports = router;
