const mongoose = require("mongoose");

const chatmessage = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = Chatmessage = mongoose.model("chatmessage", chatmessage);
