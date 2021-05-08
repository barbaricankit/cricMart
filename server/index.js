const express = require("express");
const passport = require("passport");
const Users = require("./models/users.model");
const app = express();
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(Users.authenticate()));
const bodyParser = require("body-parser");
const PORT = 5000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const { MongoConnection } = require("./MongoDb/db.connect");

MongoConnection();
const productrouter = require("./routes/products.route.js");
const userrouter = require("./routes/users.route.js");
const cartrouter = require("./routes/cart.route.js");
const wishlistrouter = require("./routes/wishlist.route.js");

app.use(productrouter);
app.use(userrouter);
app.use(cartrouter);
app.use(wishlistrouter);
app.get("/", (req, res) => {
  res.send("Welcome to Ankit's Server");
});
app.listen(process.env.PORT || PORT, () => {
  console.log("Server started at PORT ", process.env.PORT || PORT);
});
app.use((req, res) => {
  res.status(400).json({ success: false, message: "Page Not Found" });
});
//Error Handler
app.use((err, req, res, next) => {
  res.json({ success: false, message: err.message });
});
