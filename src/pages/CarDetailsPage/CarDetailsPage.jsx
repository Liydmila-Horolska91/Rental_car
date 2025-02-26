import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/cars/carsOperations';
import CarDetails from '../../components/CarDetails/CarDetails';
import Loader from '../../components/Loader/Loader';

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoading = useSelector((state) => state.cars.isLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      <CarDetails />
    </div>
  );
};

export default CarDetailsPage;console.log('CarDetailsPage component rendered');
console.log('isLoading:', isLoading);
console.log('id:', id);