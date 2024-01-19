const { Schema, model } = require("mongoose");

const globalSchema = new Schema(
  {
    logo: {
      type: String,
      required: true,
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
