import React, { ReactNode } from 'react';

import { ButtonStyled } from './styles';

interface ButtonProps {
    children: ReactNode;
    color?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button = ({
    children, color, type, ...props
}: ButtonProps) => (
    <ButtonStyled
        $color={color}
        type={type}
        {...props}
    >
        {children}
    </ButtonStyled>
);

export default Button;
