import styled from 'styled-components';

interface ButtonStyledProps {
    $color?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    background-color: ${({ $color }) => ($color || '#0e0e0e')}; 
    border: none;
    color: #FFF;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    line-height: 30px;
    padding: 10px 50px;
    text-align: center;
    text-transform: uppercase;
`;
