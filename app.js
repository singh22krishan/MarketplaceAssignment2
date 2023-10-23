const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const itemRoutes = require("./routes/itemRouter");
const port = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS
app.use(cors());

// Define your API routes
app.use("/api", itemRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://ksing503:ME5Ee33cAWFYNaAK@cluster0.nfhzlop.mongodb.net/marketplace?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
