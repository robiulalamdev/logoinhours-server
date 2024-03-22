const express = require("express");
const { upload, handleMulterError } = require("../../../config/multerConfig");
const {
  spToggle,
  getSp,
  updateSp,
  createSP,
  sPInitialize,
  getAllSp,
  deleteSp,
  getSpBySlug,
  getSubPagesByPageId,
  updateSubPageStatus,
} = require("./sp.controller");
const router = express.Router();

// routes
router.post("/create", createSP);
router.post("/initialize", sPInitialize);
router.post(
  "/toggle/:id",
  upload.fields([
    // { name: "hero_section_banners", maxCount: 10 },
    { name: "boost_creativity_image", maxCount: 1 },

    // stand out section
    { name: "stand_out_card_1_icon", maxCount: 1 },
    { name: "stand_out_card_2_icon", maxCount: 1 },
    { name: "stand_out_card_3_icon", maxCount: 1 },
    { name: "stand_out_card_4_icon", maxCount: 1 },

    // companies section
    { name: "companies_image_1", maxCount: 1 },
    { name: "companies_image_2", maxCount: 1 },
    { name: "companies_image_3", maxCount: 1 },
    { name: "companies_image_4", maxCount: 1 },

    // appointment section
    // { name: "appointment_bg_image", maxCount: 1 },
    // { name: "appointment_bg_form_image", maxCount: 1 },

    // it_solutions section
    { name: "it_solution_icon_1", maxCount: 1 },
    { name: "it_solution_icon_2", maxCount: 1 },
    { name: "it_solution_icon_3", maxCount: 1 },
    { name: "it_solution_icon_4", maxCount: 1 },

    // work_process section
    { name: "work_process_icon_1", maxCount: 1 },
    { name: "work_process_icon_2", maxCount: 1 },
    { name: "work_process_icon_3", maxCount: 1 },
    { name: "work_process_icon_4", maxCount: 1 },
  ]),
  handleMulterError,
  spToggle
);
router.get("/:id", getSp);
router.get("/sub-pages/:pageId", getSubPagesByPageId);
router.get("/single/:slug", getSpBySlug);
router.get("/", getAllSp);
router.patch("/:id", updateSp);
router.patch("/status/:id", updateSubPageStatus);
router.delete("/:id", deleteSp);
// router.delete("/", )

module.exports = router;
