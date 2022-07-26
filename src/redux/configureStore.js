import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cryptoSlice from './coinSlice';

const rootReducer = combineReducers({
  cryptos: cryptoSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
