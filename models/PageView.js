const mongoose = require("mongoose");

const PageViewSchema = new mongoose.Schema({
  path: String,
  date: Date,
  userAgent: String
});

module.exports = mongoose.model("PageView", PageViewSchema);
