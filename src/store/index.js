// Feito com base nos códigos de exemplo do Course
import { createStore, applyMiddleWare } from 'redux';
import rootreducer from '../reducers';

const store = createStore(
  rootreducer,
  applyMiddleWare(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
