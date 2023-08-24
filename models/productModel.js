const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: Number,
  categories: String,
})

const product = mongoose.model("product", productSchema)
module.exports = product
