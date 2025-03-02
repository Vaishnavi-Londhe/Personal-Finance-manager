const mongoose = require("mongoose");
const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  image: { type: String },
});
module.exports = mongoose.model("Place", PlaceSchema);