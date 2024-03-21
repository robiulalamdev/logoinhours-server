const { subPageData } = require("../../../utils/data");
const SP = require("./sp.model");
const { generateSpSlug } = require("./sp.service");

const createSP = async (req, res) => {
  try {
    const newData = JSON.parse(req.body?.newData) || null;
    if (req.files) {
      if (req.files?.hero_section_banners?.length > 0) {
        let images = [];
        for (let i = 0; i < req.files?.hero_section_banners?.length; i++) {
          const element = req.files?.hero_section_banners[i]?.path;
          images.push(element);
        }
        newData["hero_section"]["banners"] = images;
      }
      if (req.files?.boost_creativity_image) {
        newData["boost_creativity"]["image"] =
          req.files?.boost_creativity_image[0]?.path;
      }

      // stand out section
      if (req.files?.stand_out_card_1_icon) {
        newData["stand_out"]["card_1"]["icon"] =
          req.files?.stand_out_card_1_icon[0]?.path;
      }
      if (req.files?.stand_out_card_2_icon) {
        newData["stand_out"]["card_2"]["icon"] =
          req.files?.stand_out_card_2_icon[0]?.path;
      }
      if (req.files?.stand_out_card_3_icon) {
        newData["stand_out"]["card_3"]["icon"] =
          req.files?.stand_out_card_3_icon[0]?.path;
      }
      if (req.files?.stand_out_card_4_icon) {
        newData["stand_out"]["card_4"]["icon"] =
          req.files?.stand_out_card_4_icon[0]?.path;
      }

      // companies section
      if (req.files?.companies_image_1) {
        newData["companies"]["image_1"] = req.files?.companies_image_1[0]?.path;
      }
      if (req.files?.companies_image_2) {
        newData["companies"]["image_2"] = req.files?.companies_image_2[0]?.path;
      }
      if (req.files?.companies_image_3) {
        newData["companies"]["image_3"] = req.files?.companies_image_3[0]?.path;
      }
      if (req.files?.companies_image_4) {
        newData["companies"]["image_4"] = req.files?.companies_image_4[0]?.path;
      }

      // appointment section
      if (req.files?.appointment_bg_image) {
        newData["appointment"]["bg_image"] =
          req.files?.appointment_bg_image[0]?.path;
      }
      if (req.files?.appointment_bg_form_image) {
        newData["appointment"]["bg_form_image"] =
          req.files?.appointment_bg_form_image[0]?.path;
      }

      // it solutions section
      if (req.files?.it_solution_icon_1) {
        newData["it_solutions"]["solution_1"]["icon"] =
          req.files?.it_solution_icon_1[0]?.path;
      }
      if (req.files?.it_solution_icon_2) {
        newData["it_solutions"]["solution_2"]["icon"] =
          req.files?.it_solution_icon_2[0]?.path;
      }
      if (req.files?.it_solution_icon_3) {
        newData["it_solutions"]["solution_3"]["icon"] =
          req.files?.it_solution_icon_3[0]?.path;
      }
      if (req.files?.it_solution_icon_4) {
        newData["it_solutions"]["solution_4"]["icon"] =
          req.files?.it_solution_icon_4[0]?.path;
      }

      // work_process section
      if (req.files?.work_process_icon_1) {
        newData["work_process"]["process_1"]["icon"] =
          req.files?.work_process_icon_1[0]?.path;
      }
      if (req.files?.work_process_icon_2) {
        newData["work_process"]["process_2"]["icon"] =
          req.files?.work_process_icon_2[0]?.path;
      }
      if (req.files?.work_process_icon_3) {
        newData["work_process"]["process_3"]["icon"] =
          req.files?.work_process_icon_3[0]?.path;
      }
      if (req.files?.work_process_icon_4) {
        newData["work_process"]["process_4"]["icon"] =
          req.files?.work_process_icon_4[0]?.path;
      }
    }
    const newCreateData = new SP(newData);
    const result = await newCreateData.save();
    res.status(200).json({
      success: true,
      message: "Data Save Success!",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Save Failed!",
      error_message: error?.message,
    });
  }
};

const sPInitialize = async (req, res) => {
  try {
    const slug = await generateSpSlug(req.body.name);
    if (slug) {
      req.body["slug"] = slug;
      const newData = new SP({ ...req.body, ...subPageData });
      const result = await newData.save();
      res.status(200).json({
        success: true,
        message: "Data Save Success!",
        data: result,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Data Save Failed!",
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Data Save Failed!",
      error_message: error?.message,
    });
  }
};

const spToggle = async (req, res) => {
  try {
    const isExist = await SP.findOne({ _id: req.params.id });
    const newData = JSON.parse(req.body?.newData) || null;
    if (req.files) {
      // if (req.files?.hero_section_banners?.length > 0) {
      //   if (newData?.hero_section?.banners?.length > 0) {
      //     let images = [];
      //     let index = 0;
      //     for (let i = 0; i < newData?.hero_section?.banners?.length; i++) {
      //       const element = newData?.hero_section?.banners[i];
      //       if (typeof element === "string") {
      //         images.push(element);
      //       } else if (typeof element === "object") {
      //         index = index === 0 ? index : index + 1;
      //         images.push(req.files?.hero_section_banners[index]?.path);
      //       }
      //     }
      //     newData["hero_section"]["banners"] = images;
      //   } else {
      //     let banners = [];
      //     for (let i = 0; i < req.files?.hero_section_banners?.length; i++) {
      //       const element = req.files?.hero_section_banners[i]?.path;
      //       banners.push(element);
      //     }
      //     newData["hero_section"]["banners"] = banners;
      //   }
      // }
      if (req.files?.boost_creativity_image) {
        newData["boost_creativity"]["image"] =
          req.files?.boost_creativity_image[0]?.path;
      }

      // stand out section
      if (req.files?.stand_out_card_1_icon) {
        newData["stand_out"]["card_1"]["icon"] =
          req.files?.stand_out_card_1_icon[0]?.path;
      }
      if (req.files?.stand_out_card_2_icon) {
        newData["stand_out"]["card_2"]["icon"] =
          req.files?.stand_out_card_2_icon[0]?.path;
      }
      if (req.files?.stand_out_card_3_icon) {
        newData["stand_out"]["card_3"]["icon"] =
          req.files?.stand_out_card_3_icon[0]?.path;
      }
      if (req.files?.stand_out_card_4_icon) {
        newData["stand_out"]["card_4"]["icon"] =
          req.files?.stand_out_card_4_icon[0]?.path;
      }

      // companies section
      if (req.files?.companies_image_1) {
        newData["companies"]["image_1"] = req.files?.companies_image_1[0]?.path;
      }
      if (req.files?.companies_image_2) {
        newData["companies"]["image_2"] = req.files?.companies_image_2[0]?.path;
      }
      if (req.files?.companies_image_3) {
        newData["companies"]["image_3"] = req.files?.companies_image_3[0]?.path;
      }
      if (req.files?.companies_image_4) {
        newData["companies"]["image_4"] = req.files?.companies_image_4[0]?.path;
      }

      // appointment section
      // if (req.files?.appointment_bg_image) {
      //   newData["appointment"]["bg_image"] =
      //     req.files?.appointment_bg_image[0]?.path;
      // }
      // if (req.files?.appointment_bg_form_image) {
      //   newData["appointment"]["bg_form_image"] =
      //     req.files?.appointment_bg_form_image[0]?.path;
      // }

      // it solutions section
      if (req.files?.it_solution_icon_1) {
        newData["it_solutions"]["solution_1"]["icon"] =
          req.files?.it_solution_icon_1[0]?.path;
      }
      if (req.files?.it_solution_icon_2) {
        newData["it_solutions"]["solution_2"]["icon"] =
          req.files?.it_solution_icon_2[0]?.path;
      }
      if (req.files?.it_solution_icon_3) {
        newData["it_solutions"]["solution_3"]["icon"] =
          req.files?.it_solution_icon_3[0]?.path;
      }
      if (req.files?.it_solution_icon_4) {
        newData["it_solutions"]["solution_4"]["icon"] =
          req.files?.it_solution_icon_4[0]?.path;
      }

      // work_process section
      if (req.files?.work_process_icon_1) {
        newData["work_process"]["process_1"]["icon"] =
          req.files?.work_process_icon_1[0]?.path;
      }
      if (req.files?.work_process_icon_2) {
        newData["work_process"]["process_2"]["icon"] =
          req.files?.work_process_icon_2[0]?.path;
      }
      if (req.files?.work_process_icon_3) {
        newData["work_process"]["process_3"]["icon"] =
          req.files?.work_process_icon_3[0]?.path;
      }
      if (req.files?.work_process_icon_4) {
        newData["work_process"]["process_4"]["icon"] =
          req.files?.work_process_icon_4[0]?.path;
      }
    }
    // console.log(newData);
    if (isExist) {
      const result = await SP.updateOne({ _id: req.params.id }, newData, {
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
        data: null,
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
const getSp = async (req, res) => {
  try {
    const result = await SP.findOne({ _id: req.params.id });
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

// get sp by slug
const getSpBySlug = async (req, res) => {
  try {
    const result = await SP.findOne({ slug: req.params.slug });
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
const getAllSp = async (req, res) => {
  try {
    const result = await SP.find({}).sort({ _id: -1 }).select("name slug");
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
const getSubPagesByPageId = async (req, res) => {
  try {
    const result = await SP.find({ page: req.params.pageId })
      .sort({ _id: -1 })
      .select("name slug");
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

const updateSp = async (req, res) => {
  try {
    const isExist = await SP.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await SP.updateOne({ _id: req.params.id }, req.body, {
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

const deleteSp = async (req, res) => {
  try {
    const isExist = await SP.findOne({ _id: req.params.id });
    if (isExist) {
      const result = await SP.deleteOne({ _id: req.params.id });
      res.status(200).json({
        success: true,
        message: "Data Delete Success!",
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
      message: "Data Delete Failed!",
      error_message: error?.message,
    });
  }
};

module.exports = {
  createSP,
  sPInitialize,
  spToggle,
  getSp,
  getSpBySlug,
  getAllSp,
  updateSp,
  deleteSp,
  getSubPagesByPageId,
};
