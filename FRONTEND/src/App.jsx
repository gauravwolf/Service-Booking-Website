import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookService from "./pages/BookService";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookService />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
