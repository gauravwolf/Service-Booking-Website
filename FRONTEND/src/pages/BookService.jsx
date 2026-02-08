import { useLocation } from "react-router-dom";
import { useState } from "react";
import { createBooking } from "../api";

export default function BookService() {
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    if (!state) {
      alert("No service selected");
      return;
    }

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill all details");
      return;
    }

    const options = {
      key: "rzp_test_1234567890", // test key (abhi ke liye)
      amount: state.price * 100,
      currency: "INR",
      name: "Service Booking",
      description: state.title,

      handler: async function (response) {
        console.log("✅ PAYMENT SUCCESS", response);

        const bookingData = {
          service: state.title,
          price: state.price,
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          paymentId: response.razorpay_payment_id,
        };

        try {
          const savedBooking = await createBooking(bookingData);
          console.log("✅ BOOKING SAVED IN DB", savedBooking);
          alert("Booking Confirmed 🎉");
        } catch (error) {
          console.error("❌ BOOKING FAILED", error);
          alert("Booking save failed");
        }
      },

      prefill: {
        name: formData.name,
        contact: formData.phone,
      },

      theme: {
        color: "#4f46e5",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container">
      <h2>Book Service</h2>

      {state && (
        <div className="booking-info">
          <p>
            <b>Service:</b> {state.title}
          </p>
          <p>
            <b>Price:</b> ₹{state.price}
          </p>
        </div>
      )}

      <form>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <br />

        <button type="button" onClick={handlePayment}>
          Pay ₹{state?.price}
        </button>
      </form>
    </div>
  );
}
