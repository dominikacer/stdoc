import React from 'react';

import './Button.scss';

interface ButtonState {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
    id: string;
}

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
