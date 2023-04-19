import {
    FETCH_PLACES_REQUEST,
    FETCH_PLACES_SUCCESS,
    FETCH_PLACES_FAILURE,
  } from './action';
  
  const initialState = {
    loading: false,
    places: [],
    error: '',
  };
  
  const placesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PLACES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PLACES_SUCCESS:
        return {
          loading: false,
          places: action.payload,
          error: '',
        };
      case FETCH_PLACES_FAILURE:
        return {
          loading: false,
          places: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default placesReducer;