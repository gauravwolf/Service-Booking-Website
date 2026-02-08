const BASE_URL = "http://localhost:5000";

// ✅ GET all services
export const getServices = async () => {
  const res = await fetch(`${BASE_URL}/api/services`);
  return res.json();
};

// ✅ CREATE booking
export const createBooking = async (bookingData) => {
  const res = await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  return res.json();
};

// ✅ GET bookings
export const getBookings = async () => {
  const res = await fetch(`${BASE_URL}/api/bookings`);
  return res.json();
};
