import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Rental Car</h1>
      <p>Find the best car for your trip!</p>
      <Link to="/catalog">View Cars</Link>
    </div>
  );
};

export default HomePage;
