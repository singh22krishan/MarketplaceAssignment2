const Item = require("../models/items");

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.itemId);
    res.status(200).json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove all items
exports.removeAllItems = async (req, res) => {
  try {
    await Item.deleteMany({});
    res.json({ message: "All items have been removed." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Find all items with names containing 'kw'
exports.findItemsByNameContaining = async (req, res) => {
  const searchString = req.query.searchString;

  try {
    const items = await Item.find({
      name: { $regex: searchString, $options: "i" },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
