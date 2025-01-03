const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
      required: false,
    },
    videoLink: {
      type: String,
      required: false,
    },
    videoDescription: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["live", "recorded"],
      required: false,
    },
    duration: {
      type: Number,
      required: false,
    },
    lectureDate: {
      type: Date,
      required: false,
    },
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
      required: false,
    },
    notesCount: {
      type: Number,
      required: false,
      default: 0,
    },
    quizCount: {
      type: Number,
      required: false,
      default: 0,
    },
    lecturerName: {
      type: String,
      required: false,
    },
    streamKey: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lecture", lectureSchema);
