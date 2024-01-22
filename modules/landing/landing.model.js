const { Schema, model } = require("mongoose");

const landingSchema = new Schema(
  {
    hero_section: {
      type: Object,
      heading: String,
      sub_heading: String,
      heading_summary: String,
      lets_talk_now: String,
      banners: [String],
      required: false,
    },
    professional_it_services: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      cards: {
        type: [Object],
        icon: String,
        title: String,
        summary: String,
        button_title: String,
      },
      required: false,
    },
    boost_creativity: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      button_title: String,
      images: [String],
      required: false,
    },
    stand_out: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      analytics: Number,
      development: Number,
      solutions: Number,
      button_title: String,
      call_for_help: String,
      cards: {
        type: [Object],
        icon: String,
        title: String,
      },
      required: false,
    },
    companies: {
      type: [String],
      required: false,
    },
    appointment: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      bg_image: String,
      bg_form_image: String,
      required: false,
    },
    it_solutions: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      cards: {
        type: [Object],
        icon: String,
        title: String,
        summary: String,
        button_title: String,
      },
      required: false,
    },
    about_our_work: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      cards: {
        type: [Object],
        title: String,
        summary: String,
        button_title: String,
      },
      required: false,
    },
    complete_services: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      required: false,
    },
    work_process: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      cards: {
        type: [Object],
        icon: String,
        title: String,
        summary: String,
      },
      required: false,
    },
    about_company: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      required: false,
    },
    client_reviews: {
      type: Object,
      sub_heading: String,
      heading: String,
      heading_summary: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Landing = model("Landing", landingSchema);
module.exports = Landing;
