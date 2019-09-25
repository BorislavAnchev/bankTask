import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({buttonText, onClick}) => {

    return (
      <button onClick={onClick} className='btn btn-primary' data-test='buttonComponent'>
        {buttonText}
      </button>
    )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button;