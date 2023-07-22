import axios from 'axios';
import { GET_USER } from './types';

export const getUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: GET_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: GET_USER, payload: res.data });
};
