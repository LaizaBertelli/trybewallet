import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions/index';

class Currency extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: {},
      codes: [],
    };
    this.saveCurrency = this.saveCurrency.bind(this);
    this.displayCurrencies = this.displayCurrencies.bind(this);
  }

  componentDidMount() {
    this.saveCurrency();
  }

  async saveCurrency() {
    const { getCurrency } = this.props;
    const { currencies } = await getCurrency();
    this.setState({
      currencies,
    }, () => this.displayCurrencies());
  }

  displayCurrencies() {
    const { currencies } = this.state;
    const keys = Object.keys(currencies);
    this.setState({ codes: keys });
  }

  render() {
    const { onChange } = this.props;
    const { codes } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          onChange={ onChange }
        >
          {
            codes.map((code) => (
              code !== 'USDT' && (
                <option
                  data-testid={ code }
                  value={ code }
                  key={ code }
                >
                  { code }
                </option>
              )
            ))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

Currency.propTypes = {
  onChange: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
