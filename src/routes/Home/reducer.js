import { GET_DATA_SUCCESS, GET_DATA_FAILED } from './constants';

const initialState = {
  homeFlag: false,
  userData: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        homeFlag: true,
        userData: action.payload.response,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        homeFlag: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
