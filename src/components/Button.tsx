import React from 'react';
import '../styles/components/Button.scss';

interface ButtonProps {
    onClick: () => void;
    active?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, active = false, children, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`custom-button ${active ? 'active' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;