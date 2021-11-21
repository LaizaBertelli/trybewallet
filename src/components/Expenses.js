import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';

class Expenses extends React.Component {
  constructor() {
    super();

    this.getTableData = this.getTableData.bind(this);
    this.getCurrencyName = this.getCurrencyName.bind(this);
    this.convertValue = this.convertValue.bind(this);
  }

  // Função para recuperar o nome por extenso da moeda
  getCurrencyName(exchanges, code) {
    const { name } = exchanges[code];
    return name.split('/')[0];
  }

  getTableData(expenses) {
    const { description, method, tag, exchangeRates, currency, value, id } = expenses;
    const currencyName = this.getCurrencyName(exchangeRates, currency);
    const { ask } = exchangeRates[currency];
    const exchangeFixed = parseFloat(ask).toFixed(2);
    return (
      <tbody key={ id }>
        <tr name={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ currencyName }</td>
          <td>{ exchangeFixed }</td>
          <td>{ this.convertValue(value, ask) }</td>
          <td>Real</td>
          <td>
            <div className="icons">
              <BiEditAlt className="delete" />
              <RiDeleteBin6Line />
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  convertValue(exchangeValue, currentAsk) {
    return (exchangeValue * currentAsk).toFixed(2);
  }

  render() {
    const { wallet } = this.props;
    return (
      <div className="expenses-table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {
            wallet.expenses !== undefined && (
              wallet.expenses.map((expense) => this.getTableData(expense))
            )
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

Expenses.propTypes = {
  wallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Expenses);
