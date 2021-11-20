import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testid, type, name, title } = this.props;
    return (
      <label htmlFor={ name }>
        { title }
        <input data-testid={ testid } type={ type } name={ name } />
      </label>
    );
  }
}

Input.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;
