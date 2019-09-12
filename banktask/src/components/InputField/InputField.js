import React from 'react';
import PropTypes from 'prop-types';
// import './styles.scss';

const InputField = ({ type, className, value, onChange, placeholder }) => {

    return (
        <input type={type} className={className} value={value} onChange={onChange} placeholder={placeholder} data-test='Input field primitive'/>
    )
}

InputField.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default InputField;