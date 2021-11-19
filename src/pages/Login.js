import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isEmailValid: false,
      isPasswordValid: false,
      isButtonDisabled: true,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    if(target.name === 'password') {
      if(target.value.length >= 5) {
        this.setState({
          isPasswordValid: true,
        });
      }
    } else {
      const hasAt = target.value.split('').find((char) => '@');
      const hasDotCom = target.value.endsWith('.com');
      if(hasAt && hasDotCom) {
        this.setState({
          isEmailValid: true,
        });
      }
    }
    const { isEmailValid, isPasswordValid } = this.state;
    if(isEmailValid && isPasswordValid ) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }
  render() {
    const { isButtonDisabled } = this.state;
    return (
      <main>
        <form>
          <input data-testid="email-input" type="email" name="email" placeholder="Enter your email..." onChange={ this.handleChange } />
          <input data-testid="password-input" type="password" name="password" placeholder="Enter your password..." onChange={ this.handleChange } />

          <button type="button" disabled={ isButtonDisabled }>Entrar</button>
        </form>
      </main>
    );
  }
}

export default Login;
