import React from 'react';

import { ButtonState } from './ButtonType';
import './Button.scss';

const Button = (
    {
        children,
        className = '',
        onClick,
        id,
    } : ButtonState
) => (
    <button
        id={id}
        className={`button ${className}`}
        type="button"
        onClick={onClick}
        key={id}
    >
        {children}
    </button>
);


export default Button;
