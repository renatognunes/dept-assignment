import React from 'react';

import { InputFieldStyled } from './styles';

interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    error?: string;
}

const InputField = ({
    label, id, error, ...props
}: InputFieldProps) => {
    const { InputComponent } = InputField.useComponent({ id, ...props });

    return (
        <InputFieldStyled>
            <label htmlFor={id}>
                {label}
                {InputComponent}
            </label>
            {error && <span data-testid="error-message">{error}</span>}
        </InputFieldStyled>
    );
};

InputField.useComponent = ({ type, id, ...props }: Partial<InputFieldProps>) => {
    let InputComponent;

    switch (type) {
        case 'textarea':
            InputComponent = (
                <textarea
                    {...props}
                    rows={5}
                    id={id}
                />
            );
            break;

        default:
            InputComponent = (
                <input
                    {...props}
                    type="text"
                    id={id}
                />
            );
            break;
    }

    return {
        InputComponent,
    };
};

export default InputField;
