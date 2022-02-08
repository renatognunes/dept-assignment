/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
    it('Should render a button', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button', { name: 'Test' });

        expect(button).toBeInTheDocument();
    });

    it('Should render a red button', () => {
        render(<Button color="red">Test</Button>);

        const button = screen.getByRole('button', { name: 'Test' });

        expect(button).toHaveStyle({ 'background-color': 'red' });
    });

    it('Should call onClick prop when clicked', () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Test</Button>);

        fireEvent.click(screen.getByRole('button', { name: 'Test' }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
