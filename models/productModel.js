const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
})

const product = mongoose.model("product", productSchema)
module.exports = product
