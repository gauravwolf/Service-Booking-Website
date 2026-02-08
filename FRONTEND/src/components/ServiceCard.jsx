import { useNavigate } from "react-router-dom";

export default function ServiceCard({ title, price, image }) {
  const navigate = useNavigate();

  const imageUrl =
    image && image.length > 0
      ? image
      : "https://via.placeholder.com/300x160?text=Service";

  return (
    <div className="service-card">
      <div className="service-image-wrapper">
        <img src={imageUrl} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>₹{price}</p>

      <button
        onClick={() =>
          navigate("/book", {
            state: { title, price },
          })
        }
      >
        Book Now
      </button>
    </div>
  );
}
