const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: false,
      trim: true,
    },
    courseDescription: [
      {
        type: String,
        required: false,
      },
    ],
    category: {
      type: String,
      enum: ["jee", "neet", "foundation"],
      required: false,
    },
    standard: {
      type: String,
      enum: ["8th", "9th", "10th", "11th", "12th", "dropper"],
      required: false,
    },
    tags: [
      {
        type: String,
        enum: [
          "Physics",
          "Chemistry",
          "Mathematics",
          "Botany",
          "Science",
          "Zoology",
        ],
        required: false,
      },
    ],
    courseStartDate: {
      type: Date,
      required: false,
    },
    courseEndDate: {
      type: Date,
      required: false,
    },
    imageUrls: [
      {
        type: String,
        required: false,
      },
    ],
    courseFeatures: [
      {
        type: String,
        required: false,
      },
    ],
    faq: [
      {
        question: {
          type: String,
          required: false,
        },
        answer: {
          type: String,
          required: false,
        },
      },
    ],
    instructorId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor",
        required: false,
      },
    ],
    // courseCreatedBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "CompanyUser",
    //   required: false,
    // },
    published: {
      type: Boolean,
      required: false,
      default: false,
    },
    scheduledLecture: {
      type: Boolean,
      required: false,
      default: false,
    },
    price: {
      type: String,
      required: false,
    },
    currency: {
      type: String,
      required: false,
      default: "INR",
    },
    discountedPrice: {
      type: String,
      required: false,
    },
    courseDuration: {
      type: String,
      required: false,
    },
    productMade:{
      type:Boolean,
      required:true,
      default:false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
