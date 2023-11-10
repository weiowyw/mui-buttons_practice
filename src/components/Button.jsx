import React from 'react';
import classNames from "classnames";
import './button.css'

const Button = (props) => {

    const {variant, disabled, loading} = props;

    const classes = classNames('button', {
        'text': variant === 'text',
        'contained': variant === 'contained',
        'outlined': variant === 'outlined',
    })

    return (
        <button className={classes} disabled={disabled}>
            {loading ? 'Loading...' : 'Happiness' }
        </button>
    );
};

export default Button;