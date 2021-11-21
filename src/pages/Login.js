import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions/index';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isButtonDisabled: true,
      email: '',
      password: '',
      changePath: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  validateInputs() {
    const { email, password } = this.state;
    const MAX_LENGTH = 6;

    const isPasswordValid = (passW) => (passW.length >= MAX_LENGTH);
    const isEmailValid = (emailValue) => {
      const hasAt = emailValue.split('').find(() => '@');
      const hasDotCom = emailValue.endsWith('.com');

      return hasAt && hasDotCom;
    };

    if (isPasswordValid(password) && isEmailValid(email)) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  redirect() {
    this.setState({ changePath: true });
  }

  render() {
    const { isButtonDisabled, changePath, email } = this.state;
    const { saveDispatch } = this.props;
    return (
      <main className="login-forms">
        <div className="form">
          <label htmlFor="email-input">
            Email:
            <br />
            <input
              data-testid="email-input"
              id="email-input"
              type="email"
              className="login-inputs"
              name="email"
              placeholder="Enter your email..."
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <br />
            <input
              data-testid="password-input"
              id="password-input"
              className="login-inputs"
              type="password"
              name="password"
              placeholder="Enter your password..."
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="send-button"
            type="button"
            disabled={ isButtonDisabled }
            onClick={ () => {
              saveDispatch(email);
              this.redirect();
            } }
          >
            Entrar
          </button>
        </div>
        {
          changePath && <Redirect to="/carteira" />
        }
      </main>
    );
  }
}

// função feita com base nos códigos de exemplo do course
const mapDispatchToProps = (dispatch) => ({
  saveDispatch: (state) => dispatch(saveEmail(state)),
});

Login.propTypes = {
  saveDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
