const mongoose = require("mongoose");

const coinflipSchema = new mongoose.Schema({
  game: { type: String, require: true },
  mode: { type: String, require: true },
  amount: { type: Number, require: true },
  pot: { type: Number, require: true },
  rounds: { type: Number, require: true },
  action: { type: String, require: true },
});

module.exports = Coinflip = mongoose.model("coinflip", coinflipSchema);
