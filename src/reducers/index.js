import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const INITIAL_STATE = [
  {
    user: '',
    wallet: '',
  }
];

function listReducer(state = INITIAL_STATE, action) {
  return state;
}

export default listReducer;
