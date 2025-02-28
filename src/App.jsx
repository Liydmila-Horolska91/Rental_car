import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
// import CarDetailsPage from "./pages/CarDetailsPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="car/:id" element={<CarDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
