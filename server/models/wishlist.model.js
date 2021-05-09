const mongoose = require("mongoose");
const { Schema } = mongoose;

const wishListScehma = new Schema({
  productIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});
const WishList = mongoose.model("Wishlist", wishListScehma);
module.exports = { WishList };
