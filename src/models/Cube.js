const mongoose = require("mongoose");

const cubeSchema = mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
  accessories: [
    {
      type: mongoose.Types.ObjectId, //* type from Mongoose
      ref: "Accessory", //* The name of the Model
    },
  ],
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
