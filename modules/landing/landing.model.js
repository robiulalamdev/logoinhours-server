const { Schema, model } = require("mongoose");

const landingSchema = new Schema(
  {
    hero_section: {
      type: Object,
      heading: String,
      sub_heading: String,
      heading_summary: String,
      lets_talk_now: String,
      how_we_work: String,
      banners: [String],
      required: false,
    },
    companies: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Landing = model("Landing", landingSchema);
module.exports = Landing;
