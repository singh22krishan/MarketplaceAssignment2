const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);