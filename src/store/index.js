// Feito com base nos códigos de exemplo do Course
import { createStore } from 'redux';
import rootreducer from '../reducers';

const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
