const Landing = require("./landing.model");

const createLanding = async (req, res) => {
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
    const newCreateData = new Landing(newData);
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

const landingToggle = async (req, res) => {
  try {
    const isExist = await Landing.findOne();
    const newData = JSON.parse(req.body?.newData) || null;
    if (req.files) {
      if (req.files?.hero_section_banners?.length > 0) {
        if (newData?.hero_section?.banners?.length > 0) {
          let images = [];
          let index = 0;
          for (let i = 0; i < newData?.hero_section?.banners?.length; i++) {
            const element = newData?.hero_section?.banners[i];
            if (typeof element === "string") {
              images.push(element);
            } else if (typeof element === "object") {
              index = index === 0 ? index : index + 1;
              images.push(req.files?.hero_section_banners[index]?.path);
            }
          }
          newData["hero_section"]["banners"] = images;
        } else {
          let banners = [];
          for (let i = 0; i < req.files?.hero_section_banners?.length; i++) {
            const element = req.files?.hero_section_banners[i]?.path;
            banners.push(element);
          }
          newData["hero_section"]["banners"] = banners;
        }
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
    // console.log(newData);
    if (isExist) {
      const result = await Landing.updateOne({}, newData, { new: true });
      res.status(200).json({
        success: true,
        message: "Data Update Success!",
        data: result,
      });
    } else {
      const newValues = new Landing(newData);
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
const getLanding = async (req, res) => {
  try {
    const result = await Landing.findOne();
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

const updateLanding = async (req, res) => {
  try {
    const isExist = await Landing.findOne();
    if (isExist) {
      const result = await Landing.updateOne({}, req.body, { new: true });
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
  createLanding,
  landingToggle,
  getLanding,
  updateLanding,
};
