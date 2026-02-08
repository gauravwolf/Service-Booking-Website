const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    service: String,
    price: Number,
    name: String,
    phone: String,
    date: String,
    time: String,
    paymentId: String,
    status: {
      type: String,
      default: "confirmed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
