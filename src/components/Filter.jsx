import { useDispatch } from "react-redux";
import { setBrand, setPrice, setMileage } from "../redux/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Brand"
        onChange={(e) => dispatch(setBrand(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => dispatch(setPrice(e.target.value))}
      />
      <input
        type="number"
        placeholder="Min Mileage"
        onChange={(e) => dispatch(setMileage({ min: e.target.value, max: "" }))}
      />
      <input
        type="number"
        placeholder="Max Mileage"
        onChange={(e) => dispatch(setMileage({ min: "", max: e.target.value }))}
      />
    </div>
  );
};

export default Filter;
