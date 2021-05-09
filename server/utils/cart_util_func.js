const { Cart } = require("../models/cart.model");
const { Users } = require("../models/users.model");
const checkNewCart = async (req, res, next) => {
  const cart = req.cart;
  const { userId } = req;
  if (cart) {
    next();
  } else {
    const user = await Users.findById(userId);
    if (req.method == "POST") {
      const { productId, quantity } = req.body;
      const newCart = new Cart({ userId, products: { productId, quantity } });
      user.cartId = newCart._id;
      const cartt = await newCart.save();
      const userr = await user.save();
      res.status(200).json({ success: true, cartt, userr });
    } else if (req.method == "GET") {
      res
        .status(200)
        .json({ success: true, message: "No cart is there for this user" });
    }
  }
};
const findCart = async (req, res, next) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  req.userId = userId;
  req.cart = cart;
  next();
};
const checkProductIsInCart = async (req, res, next) => {
  let { cart } = req;
  const { productId, quantity } = req.body;
  const product = cart.products.find(
    ({ productId: product_id }) => productId == product_id
  );
  if (product) {
    next();
  } else {
    cart.products.push({ productId, quantity });
    const updatedCart = await cart.save();
    res.status(200).json({
      success: true,
      message: "Updated the cart successfully",
      updatedCart: updatedCart,
    });
  }
};
const updateCart = async (req, res, next) => {
  let { cart } = req;
  const { productId, quantity } = req.body;
  const index = cart.products.findIndex(
    (product) => product.productId == productId
  );

  quantity
    ? (cart.products[index].quantity = quantity)
    : cart.products.splice(index, 1);
  const updatedCart = await cart.save();
  req.updatedCart = updatedCart;
  next();
};
module.exports = { findCart, checkNewCart, checkProductIsInCart, updateCart };
