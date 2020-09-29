const mongoose = require("mongoose");

const diceBetSchema = new mongoose.Schema({
  game: { type: String, required: true },
  user: { type: String, required: true },
  time: { type: String, required: true },
  bet: { type: Number, required: true },
  payout: { type: Number, required: true },
  result: { type: Number, required: true },
  profit: { type: Number, required: true },
  rollside: { type: String, required: true },
  rolllimit: { type: Number, required: true },
  winchance: { type: Number, required: true },
  isWinner: { type: Boolean, required: true },
});

module.exports = DiceBet = mongoose.model("dicebet", diceBetSchema);
