import React from 'react';
import PropTypes from 'prop-types';

class Currency extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select data-testid="currency-input" name="currency" onChange={ onChange }>
          <option value="teste">Teste</option>
          <option value="teste2">Teste2</option>
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Currency;
