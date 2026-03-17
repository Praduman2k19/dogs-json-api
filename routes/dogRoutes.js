const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../utils/fileHandler");

// GET ALL
router.get("/", async (req, res) => {
  const data = await readData();
  res.json(data);
});

// CREATE
router.post("/", async (req, res) => {
  const { breed, subBreed } = req.body;

  const data = await readData();

  if (!data[breed]) {
    data[breed] = [];
  }

  if (subBreed && !data[breed].includes(subBreed)) {
    data[breed].push(subBreed);
  }

  await writeData(data);

  res.json({ message: "Dog added", data });
});

// UPDATE
router.put("/:breed", async (req, res) => {
  const { breed } = req.params;
  const { newBreed, subBreeds } = req.body;

  const data = await readData();

  if (!data[breed]) {
    return res.status(404).json({ message: "Breed not found" });
  }

  delete data[breed];
  data[newBreed] = subBreeds || [];

  await writeData(data);

  res.json({ message: "Updated", data });
});

// DELETE
router.delete("/:breed", async (req, res) => {
  const { breed } = req.params;

  const data = await readData();

  if (!data[breed]) {
    return res.status(404).json({ message: "Not found" });
  }

  delete data[breed];

  await writeData(data);

  res.json({ message: "Deleted", data });
});

module.exports = router;