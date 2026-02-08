import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10, color: "#fff" }}>Home</Link>
      <Link to="/book" style={{ marginRight: 10, color: "#fff" }}>Book Service</Link>
      <Link to="/my-bookings" style={{ color: "#fff" }}>My Bookings</Link>
    </nav>
  );
}
