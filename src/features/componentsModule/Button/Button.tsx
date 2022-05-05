import React from 'react';

import { ButtonState } from './ButtonType';
import './Button.scss';

const Button = (
    {
        children,
        className = '',
        onClick,
        id,
        isDisabled,
    } : ButtonState
) => (
    <button
        id={id}
        className={`button ${className}`}
        type="button"
        onClick={onClick}
        key={id}
        disabled={isDisabled}
    >
        {children}
    </button>
);


export default Button;
