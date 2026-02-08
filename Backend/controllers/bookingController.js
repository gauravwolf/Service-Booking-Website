const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  try {
    const { service, price, name, phone, date, time, paymentId } = req.body;

    if (!service || !price || !name || !phone || !paymentId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const booking = await Booking.create({
      service,
      price,
      name,
      phone,
      date,
      time,
      paymentId,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getBookings };
