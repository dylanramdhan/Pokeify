const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates a new schema for a blog object.
const blogSchema = new Schema({
  account: String,
  other: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);