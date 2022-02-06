import {
    TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx, DesktopMaxWidthPx,
} from '@styles/variables';
import styled from 'styled-components';

interface SingleCaseWrapperStyledProps {
    $reverse?: boolean;
}

export const HomeDropdownWrapperStyled = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 60px 0px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin: 40px 0px;
	}
	
	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		justify-content: flex-start;
		margin: 30px 0px;
	}
`;

export const MainContentStyled = styled.div`
	margin: 0 100px;

	@media(max-width: ${DesktopMaxWidthPx}) {
		margin: 0 40px;	
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin: 0 20px;
	}
`;

export const GridCasesWrapperStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

`;

export const SingleCaseWrapperStyled = styled.div<SingleCaseWrapperStyledProps>`
	display: flex;
	flex-direction: ${({ $reverse }) => ($reverse ? 'row' : 'row-reverse')};

	@media (max-width: ${DesktopMaxWidthPx}) {
		flex-direction: column;
	}

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		flex-direction: ${({ $reverse }) => ($reverse ? 'column' : 'column-reverse')};
	}
`;

export const SmallCasesWrapperStyled = styled.div`
	flex: 1;
	max-height: 500px;
`;

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
