require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");
const PositionModel = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { UserModel } = require("./model/UserModel");
const { createSecretToken } = require("./utils/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const WatchlistModel = require("./model/WatchlistModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "https://zerodhahome-chi.vercel.app",
  "https://zerodhadashboard-self.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/allholdings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/watchlist", async (req, res) => {
  let watchlist = await WatchlistModel.find({});
  res.json(watchlist);
});

app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/neworder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order Saved");
});

app.post("/checkaccount", async (req, res) => {
  try {
    const { email } = req.body;
    const exstingUser = await UserModel.findOne({ email });
    if (exstingUser) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
  }
});

app.post("/signup", async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = UserModel.create({ email, username, password, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User successfully signed in", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
});
app.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ message: "All fields are required to fill" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.json({ message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      res.json({ message: "Incorrect email or password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      withCredentials: true,
    });
    console.log("Cookies Generated in /login");
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
});

app.post("/", (req, res) => {
  const token = req.cookies.token;
  console.log("Cookies in req body:");
  console.log(req.cookies);
  console.log(token);
  if (!token) {
    console.log("false in 139");
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log("false in 145");
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        console.log("false in 151");
        return res.json({ status: false });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log("app Is listining on port 8080 ");
  mongoose.connect(uri);
  console.log("DB Connected");
});
