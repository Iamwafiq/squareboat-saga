/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import homeReducer from '../routes/Home/reducer';
export default function createReducer() {
  const rootReducer = combineReducers({
    homeReducer: homeReducer,
  });
  return rootReducer;
}
