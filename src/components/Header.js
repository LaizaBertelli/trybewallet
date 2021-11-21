import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/header.css';
import { GiWallet } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';

class Header extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    const { walletInfo } = this.props;
    if (walletInfo.expenses !== undefined && walletInfo.expenses.length !== 0) {
      // Recupera do estado o valor da despesa e a cotação e retorna um array com cada despesa multiplicada por sua resferente cotação
      const { expenses } = walletInfo;
      const expensesMaped = expenses.map(
        (expense) => (
          parseFloat(expense.value) * expense.exchangeRates[expense.currency].ask
        ),
      );
      // Retorna a soma de todas as despesas
      return expensesMaped.reduce((acc, curr) => acc + curr);
    }
    return 0;
  }

  render() {
    const { userInfo } = this.props;
    const { email } = userInfo;
    return (
      <header className="header">
        <div className="wallet-infos-header">
          <span><GiWallet size={ 40 } className="react-icons" /></span>
          <p data-testid="total-field">{ this.getValue() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <div className="email-container">
          <span><CgProfile size={ 20 } /></span>
          <p data-testid="email-field">{ email }</p>
        </div>
      </header>
    );
  }
}

// função criada com base nos códigos de exemplo do Course
const mapStateToProps = (state) => ({
  userInfo: state.user,
  walletInfo: state.wallet,
});

Header.propTypes = {
  userInfo: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  walletInfo: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default connect(mapStateToProps, null)(Header);
