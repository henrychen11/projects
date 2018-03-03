import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import ReduxPromise from 'redux-promise';


const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(ReduxPromise))
);

export default configureStore;