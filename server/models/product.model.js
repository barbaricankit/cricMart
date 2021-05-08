const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Category } = require("./category.model");
const productSchema = new Schema({
  name: String,
  brand: String,
  desc: Array,
  price: Number,
  discountedPrice: Number,
  discountPercentage: Number,
  warranty: String,
  offers: Array,
  category_name: { type: Schema.Types.String, ref: Category },
  stock_quantity: Number,
  isFastDeliveryAvailable: Boolean,
  img: String,
  rating: Number,
});

const Products = mongoose.model("Product", productSchema);
module.exports = { Products };
