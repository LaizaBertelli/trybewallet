import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, name, title, onChange, options } = this.props;
    if (name === 'method' || name === 'tag') {
      return (
        <label htmlFor={ name }>
          { title }
          <select data-testid={ testid } name={ name } onChange={ onChange }>
            {
              options.map((option, index) => (
                <option
                  value={ option.replace(/\s/g, '') }
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
        <input data-testid={ testid } type="text" name={ name } onChange={ onChange } />
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
};

export default Input;
