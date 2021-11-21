import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, name, title, onChange, options, value } = this.props;
    if (name === 'method' || name === 'tag') {
      return (
        <label htmlFor={ name }>
          { title }
          <select data-testid={ testid } id={ name } name={ name } onChange={ onChange }>
            {
              options.map((option, index) => (
                <option
                  // Método replace utilizado com base nesse código: https://pt.stackoverflow.com/questions/382479/removendo-todos-os-espa%C3%A7os-de-uma-string-usando-javascript
                  value={ option }
                  key={ index }
                >
                  { option }
                </option>
              ))
            }
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ name }>
        { title }
        <input
          data-testid={ testid }
          type="text"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  options: [],
};

Input.propTypes = {
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired,
};

export default Input;
