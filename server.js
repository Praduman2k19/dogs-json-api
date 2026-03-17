const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const dogRoutes = require("./routes/dogRoutes");
app.use("/api/dogs", dogRoutes);

const PORT = process.env.PORT || 5987;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});