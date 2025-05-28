import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import addressroute from './routes/Address'
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/address" , addressroute);
const mongoUrl = process.env.MONGO_URL;
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

if (!mongoUrl) {
  console.error("MONGO_URL not found in environment variables.");
  process.exit(1);
}

mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

export default app;