const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../dogs.json");

async function readData() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };