// Feito com base nos códigos de exemplo do Course 
import { combineReducers, createStore } from 'redux';
import listReducer from '../reducers';

const rootreducer = combineReducers({ listReducer });

const store = createStore(rootreducer);

export default store;
