const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema(
  {
    rating: {
      type: Number,
    },
    message: {
      type: String,
    },
    author: {
      type: Object,
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      company_name: {
        type: String,
        required: true,
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Review = model("Review", reviewsSchema);
module.exports = Review;
