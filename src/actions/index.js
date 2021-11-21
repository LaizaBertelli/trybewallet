// Coloque aqui suas actions
export const saveEmail = (value) => ({
  type: 'SAVE_EMAIL',
  value,
});

export const saveWallet = (value) => ({
  type: 'SAVE_WALLET',
  value,
});

// Funções criadas com base nos exemplos do Course
const requestCurrencies = () => ({
  type: 'REQUEST_CURRENCY',
});

const receiveCurrencies = (currencies) => ({
  type: 'RECEIVE_CURRENCY',
  currencies,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrencies(currencies)));
  };
}
