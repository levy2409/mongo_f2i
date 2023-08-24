const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
  nationality: String
})

const product = mongoose.model("product", productSchema)
module.exports = product
