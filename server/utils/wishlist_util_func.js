const { WishList } = require("../models/wishlist.model");
const { Users } = require("../models/users.model");

const findWishlist = async (req, res, next) => {
  const { userId } = req.params;
  const wishlist = await WishList.findOne({ userId });
  req.userId = userId;
  req.wishlist = wishlist;

  next();
};

const checkNewWishlist = async (req, res, next) => {
  const { wishlist } = req;
  const { userId } = req;
  if (wishlist) {
    next();
  } else {
    const user = await Users.findById(userId);
    if (req.method == "POST") {
      const { productId } = req.body;
      const newWishlist = new WishList({
        userId,
        productIds: [productId],
      });
      user.wishlistId = newWishlist._id;
      const wishlistt = await newWishlist.save();
      const userr = await user.save();
      res.status(200).json({ success: true, wishlistt, userr });
    } else if (req.method == "GET") {
      res.status(200).json({
        success: true,
        message: "No WishList is there for this user",
      });
    }
  }
};

const checkProductIsInWishlist = async (req, res, next) => {
  let { wishlist } = req;
  const { productId } = req.body;
  const product = wishlist.productIds.find(
    (product_id) => productId == product_id
  );
  if (product) {
    next();
  } else {
    wishlist.productIds.push(productId);
    const updatedWishlist = await wishlist.save();
    res.status(200).json({
      success: true,
      message: "Updated the wishlist successfully",
      updatedWishlist: updatedWishlist,
    });
  }
};
const updateWishlist = async (req, res, next) => {
  let { wishlist } = req;
  const { productId } = req.body;
  const index = wishlist.productIds.findIndex(
    (product_id) => product_id == productId
  );
  wishlist.productIds.splice(index, 1);

  const updatedWishlist = await wishlist.save();
  req.updatedWishlist = updatedWishlist;
  next();
};

module.exports = {
  findWishlist,
  checkNewWishlist,
  checkProductIsInWishlist,
  updateWishlist,
};
