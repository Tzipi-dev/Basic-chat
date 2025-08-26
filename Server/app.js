const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config(); 
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
app.use(cors());
app.use(express.json());
mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
