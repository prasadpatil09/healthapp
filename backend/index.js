import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import HealthData from "./models/watchdata.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://123prasad4009:%40Pp1020975@cluster0.fjnhg5x.mongodb.net/healthdata',
)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


// POST /status
app.post("/status", async (req, res) => {
  try {
    const { deviceId, heartRate, timestamp, battery, extraData } = req.body;

    const healthRecord = new HealthData({
      deviceId,
      heartRate,
      timestamp,
      battery,
      extraData,
    });

    await healthRecord.save();

    res.json({ status: "success", data: healthRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
