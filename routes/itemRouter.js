const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Define routes
router.get("/items/search", itemController.findItemsByNameContaining);
router.post("/items", itemController.createItem);
router.get("/items", itemController.getAllItems);
router.get("/items/:itemId", itemController.getItemById);
router.put("/items/:itemId", itemController.updateItem);
router.delete("/items/:itemId", itemController.deleteItem);
router.delete("/items", itemController.removeAllItems);

module.exports = router;