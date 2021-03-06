const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true, minlength: 5 },
  username: { type: String, required: true },
  balance: { type: Number, required: true },
});

module.exports = User = mongoose.model("user", userSchema);
