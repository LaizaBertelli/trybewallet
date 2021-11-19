import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import saveEmail from '../actions/index'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isEmailValid: false,
      isPasswordValid: false,
      isButtonDisabled: true,
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
  }

  validateInputs() {
    const { email, password } = this.state;

    const isPasswordValid = (password) => (password.length >= 6);
    let isEmailValid = (email) => {
      const hasAt = email.split('').find((char) => '@');
      const hasDotCom = email.endsWith('.com');

      return hasAt && hasDotCom;
    };

    if(isPasswordValid(password) && isEmailValid(email)) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value}, () => this.validateInputs());
  }
  render() {
    const { isButtonDisabled } = this.state;
    const { saveDispatch } = this.props;
    return (
      <main>
        <form>
          <input data-testid="email-input" type="email" name="email" placeholder="Enter your email..." onChange={ this.handleChange } />
          <input data-testid="password-input" type="password" name="password" placeholder="Enter your password..." onChange={ this.handleChange } />

          <button type="button" disabled={ isButtonDisabled } onClick={ () => saveDispatch(this.state) }>Entrar</button>
        </form>
      </main>
    );
  }
}

// função feita com base nos códigos de exemplo do course
const mapDispatchToProps = (dispatch) => ({
  saveDispatch: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
