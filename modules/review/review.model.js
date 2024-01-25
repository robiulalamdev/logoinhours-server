const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema(
  {
    rating: {
      type: Number,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewsSchema);
module.exports = Review;
