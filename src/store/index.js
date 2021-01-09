import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from '../reducers';
import rootSaga from '../sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const getStore = () => {
  const persistConfig = {
    key: 'squareboat-data',
    storage,
  };

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store
  const persistedReducer = persistReducer(persistConfig, createReducer());
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  let persistor = persistStore(store);
  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
export default getStore;
