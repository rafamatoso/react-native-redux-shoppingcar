import api from '../../services/api.service';

import { addCars, addCar } from '../ducks/cars';

export const allCars = () => {
  return dispatch => {
    api
      .get('/cars')
      .then(res => dispatch(addCars(res.data)))
      .catch(console.log);
  };
};

export const fetchAddCar = car => {
  return dispatch => {
    api
      .post('/cars', car)
      .then(res => dispatch(addCar(res.data)))
      .catch(console.log());
  };
};
