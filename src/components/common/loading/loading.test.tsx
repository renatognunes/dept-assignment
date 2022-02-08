/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Loading from '.';

describe('<Loading />', () => {
    it('Should render a loading text', () => {
        render(<Loading />);

        const loadingEl = screen.getByText('...Loading');

        expect(loadingEl).toBeInTheDocument();
    });
});
