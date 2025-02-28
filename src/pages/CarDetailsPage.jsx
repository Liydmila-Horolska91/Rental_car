import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../api/carService";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    getCarById(id).then(setCar);
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h2>{car.brand} {car.model}</h2>
      <img src={car.image} alt={car.name} />
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} km</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarDetailsPage;
