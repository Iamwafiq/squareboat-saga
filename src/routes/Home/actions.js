import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from './constants';

export const getData = () => {
  return {
    type: GET_DATA,
  };
};

export const getDataSuccess = (obj) => {
  return {
    type: GET_DATA_SUCCESS,
    payload: {
      ...obj,
    },
  };
};

export const getDataFailed = (obj) => {
  return {
    type: GET_DATA_FAILED,
    payload: {
      ...obj,
    },
  };
};
