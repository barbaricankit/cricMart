const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  name: String,
});

const Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
