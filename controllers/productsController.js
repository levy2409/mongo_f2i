const productModel = require("../models/productModel");

const createProduct = (req, res) => {
  const newProduct = new productModel({
    name: "Pain tradition",
    price: 20,
    categories: "pain",
  });
  newProduct.save();
  res.send(newProduct);
};

const updateProduct = async (req, res) => {
  const id = req.params.Product_id;
  const updateData = {
    name: req.body.name,
    price: req.body.price,
    categories: req.body.categories,
    };
  try {
    const Product = await productModel.findOneAndUpdate({ _id: id }, updateData);
    res.send({ msg: "Product updated!", Product });
  } catch (err) {
    console.log({ msg: "erreur d'ajout" });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.Product_id;
  await productModel.deleteOne({ _id: id });
  res.send({ msg: " Product successfully deleted!" });
};

const allProducts = async (req, res) => {
  try {
    const Products = await productModel.find()
    res.send(Products)
  } catch (error) {
    console.log({ msg: ` ${error.message}` });
  }
};
module.exports = { createProduct, updateProduct, deleteProduct, allProducts };
