import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Currency from './Currency';
import { saveWallet, fetchCurrency } from '../actions/index';

const METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAGS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      expense: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.recoverCurrency = this.recoverCurrency.bind(this);
    this.sendDispatch = this.sendDispatch.bind(this);
  }

  async recoverCurrency() {
    const { getCurrency } = this.props;
    const { currencies } = await getCurrency();
    this.setState({ exchangeRates: currencies }, () => this.addExpense());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addExpense() {
    const {
      expenses,
      expense,
      currency,
      method,
      tag,
      description,
      exchangeRates,
      id,
    } = this.state;

    this.setState({
      expenses: [
        ...expenses,
        {
          id,
          value: expense,
          description,
          currency,
          method,
          tag,
          exchangeRates,
        },
      ],
    }, () => { this.sendDispatch(); });
  }

  // Função para corrigir erro de lint sobre multiplas desconstruções de 'expenses' dentro de uma única função -> desconstruí várias vezes por causa da assincronicidade das funções
  sendDispatch() {
    const { saveDispatch } = this.props;
    const { expenses } = this.state;
    saveDispatch(expenses);
    this.setState((previousState) => ({ expense: 0, id: previousState.id + 1 }));
  }

  render() {
    const { expense } = this.state;
    return (
      <div className="wallet-form">
        <Input
          testid="value-input"
          name="expense"
          title="Despesas:"
          onChange={ this.handleChange }
          value={ expense }
        />
        <Input
          testid="description-input"
          name="description"
          title="Descrição da empresa:"
          onChange={ this.handleChange }
        />
        <Currency onChange={ this.handleChange } />
        <Input
          testid="method-input"
          name="method"
          title="Método de Pagamento:"
          options={ METHODS }
          onChange={ this.handleChange }
        />
        <Input
          testid="tag-input"
          name="tag"
          title="Tags:"
          options={ TAGS }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => {
            this.recoverCurrency();
            // this.addExpense();
          } }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

// função feita com base nos códigos de exemplo do course
const mapDispatchToProps = (dispatch) => ({
  saveDispatch: (state) => dispatch(saveWallet(state)),
  getCurrency: () => dispatch(fetchCurrency()),
});

Form.propTypes = {
  saveDispatch: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
