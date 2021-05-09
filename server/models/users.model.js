const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const { Cart } = require("./cart.model");
const { WishList } = require("./wishlist.model");
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: Cart },
  wishlistId: { type: mongoose.Schema.Types.ObjectId, ref: WishList },
});
userSchema.plugin(passportLocalMongoose);
const Users = mongoose.model("User", userSchema);
module.exports = { Users };
