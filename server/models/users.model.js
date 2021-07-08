const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const { Cart } = require('./cart.model');
const { WishList } = require('./wishlist.model');
const userSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	username: String
});
userSchema.plugin(passportLocalMongoose);
const Users = mongoose.model('User', userSchema);
module.exports = { Users };
