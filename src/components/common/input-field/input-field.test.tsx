/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import InputField from '.';

describe('<InputField />', () => {
    it('Should render text input field', () => {
        render(<InputField
            label="First Name"
            id="name"
            type="text"
            data-testid="test-id"
        />);

        const input = screen.getByTestId('test-id');
        const label = screen.getByLabelText('First Name');

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
        expect(label).toBeInTheDocument();
    });

    it('Should display error message for text input field', () => {
        render(<InputField
            label="First Name"
            id="name"
            type="text"
            data-testid="test-id"
            error="Field is required."
        />);

        const input = screen.getByTestId('test-id');
        const error = screen.getByTestId('error-message');

        expect(input).toBeInTheDocument();
        expect(error).toBeInTheDocument();
    });

    it('Should render textarea input field', () => {
        render(<InputField
            label="Message"
            id="message"
            type="textarea"
            data-testid="test-id"
        />);

        const input = screen.getByTestId('test-id');
        const label = screen.getByLabelText('Message');

        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('rows', '5');
        expect(label).toBeInTheDocument();
    });

    it('Should display error message for textarea input field', () => {
        render(<InputField
            label="Message"
            id="message"
            type="textarea"
            data-testid="test-id"
            error="Field is required."
        />);

        const input = screen.getByTestId('test-id');
        const error = screen.getByTestId('error-message');

        expect(input).toBeInTheDocument();
        expect(error).toBeInTheDocument();
    });
});
