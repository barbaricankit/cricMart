const express = require("express");
const router = express.Router();

const {
  findWishlist,
  checkNewWishlist,
  checkProductIsInWishlist,
  updateWishlist,
} = require("../utils/wishlist_util_func");

router
  .route("/:userId/wishlist")
  .get(findWishlist, checkNewWishlist, async (req, res) => {
    const { wishlist } = req;

    const { products } = await wishlist
      .populate({
        path: "products.productId",
      })
      .execPopulate();

    res.status(200).json({
      success: true,
      products,
    });
  })
  .post(
    findWishlist,
    checkNewWishlist,
    checkProductIsInWishlist,
    updateWishlist,
    async (req, res) => {
      const { updatedWishlist } = req;

      res.status(200).json({ success: true, updatedWishlist });
    }
  );

module.exports = router;
