import { useEffect, useState } from "react";
import { getBookings } from "../api";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="container">Loading bookings...</div>;
  }

  return (
    <div className="container">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="booking-info">
            <p><b>Service:</b> {booking.service}</p>
            <p><b>Price:</b> ₹{booking.price}</p>
            <p><b>Date:</b> {booking.date}</p>
            <p><b>Time:</b> {booking.time}</p>
            <p><b>Status:</b> {booking.status}</p>
          </div>
        ))
      )}
    </div>
  );
}
