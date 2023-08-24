const router = require("express").Router();

const { createRugby, updatePlayerR, deletePlayerR } = require("../controllers/productsController");

router.get("/tennis", allPlayers);
router.post("/tennis", createTennis)
router.put("/tennis/:player_id", updatePlayer);
router.delete('/tennis/:player_id', deletePlayer)

module.exports = router;
