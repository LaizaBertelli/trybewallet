import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Currency from './Currency';
import { saveWallet } from '../actions/index';

const METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAGS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      expense: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addExpense() {
    const { expenses, expense, currency, method, tag, description } = this.state;
    let id = 0;
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
        },
      ],
    });
    id += 1;
  }

  render() {
    const { saveDispatch } = this.props;
    const { expenses } = this.state;
    return (
      <div className="wallet-form">
        <Input
          testid="value-input"
          name="expense"
          title="Despesas:"
          onChange={ this.handleChange }
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
            this.addExpense();
            saveDispatch(expenses);
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
});

Form.propTypes = {
  saveDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
