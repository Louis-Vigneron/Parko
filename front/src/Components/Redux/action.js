/* import { STORAGE__PLACE } from "./constant";

export const storePlaces = (item) => {
    return{
        type: STORAGE__PLACE,
        data:item
    }
} */

import axios from 'axios';

export const FETCH_PLACES_REQUEST = 'FETCH_PLACES_REQUEST';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILURE = 'FETCH_PLACES_FAILURE';

export const fetchPlaces = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLACES_REQUEST });

    axios
      .get('http://localhost:4200/places')
      .then((response) => {
        dispatch({
          type: FETCH_PLACES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PLACES_FAILURE,
          payload: error.message,
        });
      });
  };
};