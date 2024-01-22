const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewsSchema);
module.exports = Review;
