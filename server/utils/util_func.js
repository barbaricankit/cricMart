const passport = require("passport");
const { Users } = require("../models/users.model");

const checkAuthentication = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username, password });
    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ sucess: false, message: "Incorrect Username or Password" });
    }
  } catch (error) {
    res.status(500).json({ sucess: false, error: error.message });
  }
};
const checkLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username) {
    res.json({ success: false, message: "Username not given" });
  } else if (!password) {
    res.json({ success: false, message: "Password not given" });
  } else {
    console.log(passport.authenticate());
    passport.authenticate("local", (err, user) => {
      if (err) {
        res.json({ success: false, message: err.message });
      } else if (!user) {
        res.json({
          success: false,
          message: "Incorrect username or password ",
        });
      } else {
        console.log(user);
        req.login(user, (err) => {
          if (err) {
            res.json({ success: false, message: err.message });
          } else {
            res.json({ success: true, message: "Authentication successful" });
          }
        });
      }
    })(req, res, next);
    next();
  }
};
const getUser = async (req, res, next) => {
  const { userId } = req.params;
  const user = await Users.findById(userId);
  req.user = user;
  next();
};
const getCartAndWishlist = async (req, res, next) => {
  try {
    const { user } = req;
    if (!user.cartId && !user.wishlistId) {
      req.cart = [];
      req.wishlist = [];
      next();
    } else if (user.cartId || user.wishlistId) {
      const cart = await user.populate({ path: "cartId" }).execPopulate();

      const wishlist = await cart
        .populate({
          path: "wishlistId",
        })
        .execPopulate();
      if (!user.cartId) {
        req.cart = [];
        req.wishlist = wishlist.wishlistId.productIds;
        next();
      } else if (!user.wishlistId) {
        req.cart = cart.cartId.products;
        req.wishlist = [];
        next();
      } else {
        req.cart = cart.cartId.products;
        req.wishlist = wishlist.wishlistId.productIds;
        next();
      }
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const saveUserToDataBase = (req, res, next) => {
  const { firstname, lastname, email, username, password } = req.body;
  const user = new Users({ firstname, lastname, email, username });
  Users.register(user, password, (err, user) => {
    if (err) {
      res.json({
        success: false,
        message: "Your account could not be saved.",
        error: err.message,
      });
    } else {
      req.user_id = user._id;
      req.user_name = user.username;
      next();
    }
  });
};
module.exports = {
  checkAuthentication,
  getCartAndWishlist,
  getUser,
  saveUserToDataBase,
  checkLogin,
};
