import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/carsSlice";
import CarCard from "../components/CarCard";
import Filter from "../components/Filter";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <h2>Car Catalog</h2>
      <Filter />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading cars</p>}
      {status === "succeeded" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {items.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
