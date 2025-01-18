const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Message Schema
const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Routes
app.post("/api/messages", async (req, res) => {
  try {
    const { text } = req.body;
    const message = new Message({ text });
    await message.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
