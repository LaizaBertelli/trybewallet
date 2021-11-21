// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = [
  {
    id: '',
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  },
];
function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_WALLET':
    return { expenses: action.value };
  default:
    return state;
  }
}

export default wallet;
