import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <Form />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
