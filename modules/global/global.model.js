const { Schema, model } = require("mongoose");

const globalSchema = new Schema(
  {
    logo: {
      type: String,
      required: false,
    },
    contact_header: {
      type: Object,
      email: String,
      phone: String,
      address: String,
      schedule: String,
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
      required: false,
    },
    colors: {
      type: Object,
      primary_color: {
        type: String,
        default: "#F78C21",
        required: true,
      },
      background_color: {
        type: String,
        default: "#ffff",
        required: true,
      },
      secondary_color: {
        type: String,
        default: "#ffff",
        required: true,
      },
      required: false,
    },
  },
  { timestamps: true }
);

const Global = model("Global", globalSchema);
module.exports = Global;
