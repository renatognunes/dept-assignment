import styled, { css } from 'styled-components';
import {
    MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx, DesktopMaxWidthPx, TekoFontFamily,
} from '@styles/variables';

import { CardContainerStyled } from './case-card/styles';

interface SingleCaseWrapperStyledProps {
    $reverse?: boolean;
}

interface GridCasesWrapperStyledProps {
    $fullWidth?: boolean;
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

export const GridCasesWrapperStyled = styled.div<GridCasesWrapperStyledProps>`
	display: flex;
	flex-wrap: wrap;

	${({ $fullWidth }) => $fullWidth && css`
		${CardContainerStyled} {
			width: 100%;

			&:last-child {
				border-bottom: none;
				margin-bottom: 0px;
			}
		}
	`}
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

export const TextStyled = styled.div`
	font-family: ${TekoFontFamily};
    font-size: 30px;
    font-weight: 400;
    padding: 40px 0px;
    text-align: center;
`;
