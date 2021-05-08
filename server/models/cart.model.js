const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Products } = require("./product.model");
const cartSchema = new Schema({
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: Products,
      },
      quantity: Number,
    },
  ],
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = { Cart };
