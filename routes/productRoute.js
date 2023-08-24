const router = require("express").Router();

const { createProduct, updateProduct, deleteProduct, allProducts } = require("../controllers/productsController");

router.get("/product", allProducts);
router.post("/product/creat", createProduct)
router.put("/product/:player_id", updateProduct);
router.delete('/product/sup/:player_id', deleteProduct)

module.exports = router;
