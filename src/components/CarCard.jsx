import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <Card>
      <img src={car.image} alt={car.name} />
      <h3>{car.brand} {car.model}</h3>
      <p>Price: ${car.price}</p>
      <button onClick={() => dispatch(toggleFavorite(car))}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </Card>
  );
};

export default CarCard;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
