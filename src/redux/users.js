import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  };
};

export const initialState = [];

export default handleActions(
  {
    FETCH_USERS: (state, action) => {
      const newUsers = action.payload.data;
      return [...state, ...newUsers];
    }
  },
  initialState
);
