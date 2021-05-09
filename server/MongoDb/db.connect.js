const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${password}@neog-cluster.fs70b.mongodb.net/inventory?retryWrites=true&w=majority`;
const MongoConnection = async () => {
  try {
    const mongooseConnect = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log({ sucess: true, message: "Connected to DB" });
  } catch (error) {
    console.log({ sucess: false, message: error.message });
  }
};

module.exports = { MongoConnection };
