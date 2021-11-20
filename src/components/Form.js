import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import { saveWallet } from '../actions/index';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  render() {
    const { saveDispatch } = this.props;
    return (
      <div className="wallet-form">
        <Input
          testid="value-input"
          type="text"
          name="expense"
          title="Despesas:"
        />
        <Input
          testid="description-input"
          type="text"
          name="description"
          title="Descrição da empresa:"
        />
        <Input
          testid="currency-input"
          type="text"
          name="currency"
          title="Moeda:"
        />
        {/* <Input
          testid="method-input"
          type="text"
          name="method"
          title="Método de Pagamento:"
        /> */}
        {/* <Input
          testid="tag-input"
          type=""
        /> */}
        <button
          type="button"
          onClick={ () => saveDispatch(this.state) }
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
