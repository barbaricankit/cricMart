const { Cart } = require('../models/cart.model');
const { Products } = require('../models/product.model');

const checkNewCart = async (req, res, next) => {
	const cart = req.cart;
	const { userId } = req;
	if (cart) {
		next();
	} else {
		if (req.method == 'POST') {
			const { productId, quantity } = req.body;
			const product = await Products.findById(productId);
			if (product.stock_quantity - quantity > 0) {
				const newCart = new Cart({ userId, products: { productId, quantity } });
				product.stock_quantity -= quantity;
				await product.save();
				await newCart.save();
				res.status(200).json({ success: true, updatedCart: newCart });
			} else {
				product.stock_quantity = 0;
				await product.save();
				res.status(200).json({ success: true, updatedCart: {} });
			}
		} else if (req.method == 'GET') {
			res.status(200).json({ success: true, message: 'No cart is there for this user' });
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
	const product = cart.products.find(({ productId: product_id }) => productId == product_id);
	if (product) {
		next();
	} else {
		cart.products.push({ productId, quantity });
		const product = await Products.findById(productId);
		product.stock_quantity -= quantity;
		await product.save();
		const updatedCart = await cart.save();
		res.status(200).json({
			success: true,
			message: 'Updated the cart successfully',
			updatedCart
		});
	}
};

const updateCart = async (req, res, next) => {
	let { cart } = req;
	const { productId, quantity } = req.body;
	const index = cart.products.findIndex((product) => product.productId == productId);
	const product = await Products.findById(productId);
	if (product.stock_quantity - quantity >= 0) {
		product.stock_quantity -= quantity;
		await product.save();
		cart.products[index].quantity + quantity
			? (cart.products[index].quantity += quantity)
			: cart.products.splice(index, 1);
		const updatedCart = await cart.save();
		req.updatedCart = updatedCart;
	} else {
		product.stock_quantity = 0;
		req.updatedCart = cart;
		await product.save();
	}
	next();
};
module.exports = { findCart, checkNewCart, checkProductIsInCart, updateCart };
