import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
=======

const InputField = ({ type, className, value, onChange, placeholder }) => {
>>>>>>> bank: create account functionality

const InputField = ({ type, className, value, onChange, placeholder, 'data-testid': dataTestId }) => {
    return (
        <input type={type} className={className} value={value} onChange={onChange} placeholder={placeholder} data-testid={`${dataTestId} Primitive`}/>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
    className: PropTypes.string.isRequired,
=======
    className: PropTypes.string,
>>>>>>> bank: create account functionality
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    'data-testid': PropTypes.string.isRequired
};

export default InputField;