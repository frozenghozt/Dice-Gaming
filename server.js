const express = require("express");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/router");
const DiceBet = require("./models/dicebetModel");

const app = express();
app.use(express.json());
app.use(cors());

const server = require("http").createServer(app);

const io = socketio(server);

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connected.");
  }
);

io.on("connect", async (socket) => {
  socket.on("roll", (bet) => {
    const { username, betAmount, rollLimit, rollside } = bet;

    // Gets luckynumber
    const luckyNumber = Number((Math.random() * 100).toFixed(2));

    // Gets bet time.
    let betDate = new Date();
    var hour = String(betDate.getHours());
    var min =
      String(betDate.getMinutes()).length === 1
        ? String("0" + betDate.getMinutes())
        : String(betDate.getMinutes());
    betDate = hour + ":" + min;

    // Gets bet profit/payout/winchance/isWinner.
    let betProfit;
    let betPayout;
    let betWinchance;
    let isWinner;
    if (rollside === "over") {
      //Profit
      betProfit = Number(
        ((betAmount * (100 / (100 - rollLimit)) - betAmount) * 0.99).toFixed(8)
      );
      //Payout
      betPayout = Math.round((100 / (100 - rollLimit)) * 1000) / 1000;
      //Winchance
      betWinchance = ((100 - rollLimit) * 100) / 100;
      //isWinner
      isWinner = luckyNumber > rollLimit;
    } else if (rollside === "under") {
      //Profit
      betProfit = ((betAmount * (100 / rollLimit) - betAmount) * 0.99).toFixed(
        8
      );
      //Payout
      betPayout = Math.round((100 / rollLimit) * 1000) / 1000;
      //Winchance
      betWinchance = (rollLimit * 100) / 100;
      //isWinner
      isWinner = luckyNumber < rollLimit;
    }

    const newDiceBet = new DiceBet({
      game: "Dice",
      user: username,
      time: betDate,
      bet: betAmount,
      payout: betPayout,
      result: luckyNumber,
      profit: betProfit,
      rollside: rollside,
      rolllimit: rollLimit,
      winchance: betWinchance,
      isWinner: isWinner,
    });

    newDiceBet.save();

    socket.emit("roll", {
      game: "Dice",
      user: username,
      time: betDate,
      bet: betAmount,
      payout: betPayout,
      result: luckyNumber,
      profit: betProfit,
      isWinner: isWinner,
    });

    io.emit("bets", {
      game: "Dice",
      user: username,
      time: betDate,
      bet: betAmount,
      payout: betPayout,
      result: luckyNumber,
      profit: betProfit,
      isWinner: isWinner,
    });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`The server has started on PORT ${PORT}`)
);
