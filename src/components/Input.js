import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, name, title, onChange, options, value } = this.props;
    if (name === 'method' || name === 'tag') {
      return (
        <div className="label-container">
          <label htmlFor={ name }><span>{ title }</span></label>
          <select data-testid={ testid } id={ name } name={ name } onChange={ onChange }>
            {
              options.map((option, index) => (
                <option
                  value={ option }
                  key={ index }
                >
                  { option }
                </option>
              ))
            }
          </select>
        </div>
      );
    }
    return (
      <div className="label-container">
        <label htmlFor={ name } className="wallet-label">
          <span>{ title }</span>
          <input
            data-testid={ testid }
            className="wallet-inputs"
            type="text"
            id={ name }
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
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
