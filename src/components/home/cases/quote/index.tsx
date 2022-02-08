/* eslint-disable max-len */
import React from 'react';

import {
    QuoteWrapperStyled,
    QuoteContentStyled,
    QuoteTextStyled,
    QuoteAuthorStyled,
} from './styles';

const Quote = () => (
    <QuoteWrapperStyled>
        <QuoteContentStyled>
            <QuoteTextStyled>
                “Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”
            </QuoteTextStyled>
            <QuoteAuthorStyled>
                MATTIJS TEN BRINK – CEO, TRANSAVIA
            </QuoteAuthorStyled>
        </QuoteContentStyled>
    </QuoteWrapperStyled>
);

export default Quote;
