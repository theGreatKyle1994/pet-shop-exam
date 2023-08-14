const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name is required."],
      minLength: [3, "Pet name must be at least 3 characters."],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Pet type is required."],
      minLength: [3, "Pet type must be at least 3 characters."],
      trim: true,
    },
    skills: {
      type: Array,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      minLength: [3, "Pet description must be at least 3 characters."],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);
