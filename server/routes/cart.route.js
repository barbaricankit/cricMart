const express = require("express");
const router = express.Router();
const { extend } = require("lodash");
const {
  findCart,
  checkNewCart,
  checkProductIsInCart,
  updateCart,
} = require("../utils/cart_util_func");

router
  .route("/:userId/cart")
  .get(findCart, checkNewCart, async (req, res) => {
    const { cart } = req;

    const { products } = await cart
      .populate({ path: "products.productId" })
      .execPopulate();

    res.status(200).json({
      success: true,
      products,
    });
  })
  .post(
    findCart,
    checkNewCart,
    checkProductIsInCart,
    updateCart,
    async (req, res) => {
      const { updatedCart } = req;

      res.status(200).json({ success: true, updatedCart });
    }
  )
  .delete(findCart, async (req, res) => {
    const { cart } = req;
    const { productId } = req.data.body;
    cart.products.forEach((product) => {
      if (product.productId == productId) {
        product = undefined;
      }
    });
    deletedProduct = await cart.save();
    res.status(200).json({ success: true, deletedProduct });
  });
module.exports = router;
