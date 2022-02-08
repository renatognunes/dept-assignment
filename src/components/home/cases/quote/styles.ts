import {
    TekoFontFamily, MobileLandscapeMaxWidthPx,
} from '@styles/variables';
import styled from 'styled-components';

export const QuoteWrapperStyled = styled.div`
	border-top: 2px solid #dddddd;
	padding: 44px 0px 80px 0px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		padding: 18px 0px 44px;
	}
`;

export const QuoteTextStyled = styled.h3`
	color: #272727;
	font-family: ${TekoFontFamily};
	font-size: 36px;
	font-weight: 400;
	line-height: 46px;
	margin-bottom: 18px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		font-size: 24px;
		line-height: 30px;
	}
`;

export const QuoteAuthorStyled = styled.div`
	color: #272727;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	font-weight: bold;
	line-height: 30px;
	text-transform: uppercase;
`;

export const QuoteContentStyled = styled.div`
	margin: auto;
	max-width: 760px;
`;
