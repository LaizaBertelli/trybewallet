import React from 'react';

class Expenses extends React.Component {
  render() {
    return (
      <div className="expenses-table">
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Expenses;
