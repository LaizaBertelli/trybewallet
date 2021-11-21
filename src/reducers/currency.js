const INITIAL_STATE = [{
  currencies: [],
}];

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURRENCY':
    return {
      ...state,
    };
  case 'RECEIVE_CURRENCY':
    return {
      ...state,
      currencies: action.value,
    };
  default:
    return state;
  }
}

export default currency;
