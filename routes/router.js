const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const DiceBet = require("../models/dicebetModel");
const User = require("../models/userModel");
const ChatMessage = require("../models/chatmessageModel");

router.get("/users", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(400).json({ msg: "Username not found." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json((err) => {
      error: err.message;
    });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deltedUser);
  } catch (err) {
    res.status(500).json((err) => {
      error: err.message;
    });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json(false);
    }
    const user = await User.findById(verified.id);
    if (!user) {
      return res.json(false);
    }
    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, passwordCheck, username } = req.body;

    if (!email || !password || !passwordCheck || !username) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "The password needs at least 5 characters" });
    }

    if (password !== passwordCheck) {
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "An account with this email already exists" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json((err) => {
      error: err.message;
    });
  }
});

router.get("/dice/:activetable/:username/:displaynum", async (req, res) => {
  try {
    const { activetable, username, displaynum } = req.params;

    if (activetable === "mybets") {
      const bet = await DiceBet.find({ user: `${username}` })
        .sort({ _id: -1 })
        .limit(parseInt(displaynum))
        .exec();
      res.json(bet);
    }

    if (activetable === "allbets") {
      const bet = await DiceBet.find()
        .sort({ _id: -1 })
        .limit(parseInt(displaynum));
      res.json(bet);
    }
  } catch (err) {
    res.status(500).json((err) => {
      error: err.message;
    });
  }
});

router.get("/chat", async (req, res) => {
  try {
    const messages = await ChatMessage.find().sort({ _id: -1 }).limit(20);
    res.json(messages);
  } catch (err) {
    res.status(500).json((err) => {
      error: err.message;
    });
  }
});

module.exports = router;
