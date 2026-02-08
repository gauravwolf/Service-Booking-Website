const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ middleware FIRST
app.use(cors());
app.use(express.json());

// routes AFTER middleware
const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Service Booking Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
