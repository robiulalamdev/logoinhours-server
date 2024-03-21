const { Schema, model } = require("mongoose");

const pageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Page = model("Page", pageSchema);
module.exports = Page;
