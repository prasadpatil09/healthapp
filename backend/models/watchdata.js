import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
  },
  heartRate: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  battery: {
    type: Number, // optional if you want battery level
    default: null,
  },
  extraData: {
    type: mongoose.Schema.Types.Mixed, // for any other sensor data
    default: {},
  },
});

// Create a model
const HealthData = mongoose.model("HealthData", healthDataSchema);

export default HealthData;
