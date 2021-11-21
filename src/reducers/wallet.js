// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = [
  {
    expense: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  },
];

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_WALLET':
    return action.value;
  default:
    return state;
  }
}

export default wallet;
