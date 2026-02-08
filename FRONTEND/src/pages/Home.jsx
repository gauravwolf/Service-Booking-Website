import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { getServices } from "../api";


export default function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="container">Loading services...</div>;
  }

  return (
    <div className="container">
      <h1>Service Booking Website</h1>
      <p>Book trusted services instantly</p>

      <div className="services">
        {services.length === 0 ? (
          <p>No services available</p>
        ) : (
          services.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              price={service.price}
              image={service.image}
            />

          ))
        )}
      </div>
    </div>
  );
}
