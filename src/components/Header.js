import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userInfo } = this.props;
    const { email } = userInfo;
    return (
      <div className="header">
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

// função criada com base nos códigos de exemplo do Course
const mapStateToProps = (state) => ({
  userInfo: state.user,
});

Header.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Header);
