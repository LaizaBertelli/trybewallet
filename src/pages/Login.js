import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {

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
