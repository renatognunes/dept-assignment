import { CardTypes } from '@components/enums';
import {
    TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx, DesktopMaxWidthPx,
} from '@styles/variables';
import styled, { css } from 'styled-components';

interface CardContainerStyledProps {
    $variant?: CardTypes
}

interface CardDescriptionStyledProps {
    $variant?: CardTypes
}

export const CardContainerStyled = styled.div<CardContainerStyledProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0px 15px 65px 15px;
	overflow: hidden;
	position: relative;
	
	${({ $variant }) => $variant === CardTypes.Medium && css`
	  	width: calc(50% - 30px);
	`};
	  
	${({ $variant }) => $variant === CardTypes.Large && css`
		flex: 1.5 1 auto;
	`};
	
	${({ $variant }) => $variant === CardTypes.Small && css`
		border-bottom: 1px solid #dddddd;
		margin-bottom: 0px;
		padding: 0px 0px 20px 0px;

		&:first-child {
			border-top: 1px solid #dddddd;
		} 
	`};

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		width: 100%;
		padding: 0px;
		margin: 0px auto 47px auto;

		${({ $variant }) => $variant === CardTypes.Small && css`
			margin-bottom: 0px;

			&:last-child {
				margin-bottom: 50px;
			} 
		`};	
	}
`;

export const CardBrandTextStyled = styled.div`
	color: #939393;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 15px;
	font-weight: bold;
	line-height: 30px;
	margin: 12px 0px;
	text-transform: uppercase;
	
	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		font-size: 14px;
		margin: 18px 0px 12px 0px;
	}	
`;

export const CardDescriptionStyled = styled.div<CardDescriptionStyledProps>`
	color: #272727;
	font-family: ${TekoFontFamily};
	font-size: ${({ $variant }) => ($variant === CardTypes.Small ? '24px' : '30px')};
	font-weight: 400;
	line-height: 32px;
	padding-bottom: 12px;

	@media(max-width: ${DesktopMaxWidthPx}) {
		${({ $variant }) => $variant === CardTypes.Small && css`
			line-height: 26px;
		`};		
	}
	
	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		padding-bottom: 0px;
		
		${({ $variant }) => $variant === CardTypes.Small && css`
			line-height: 32px;
			padding-bottom: 30px;
		`};	
	}
`;

export const CardLinkStyled = styled.div`
	align-items: center;
	color: #1a18f7;
	cursor: pointer;
	display: flex;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	font-weight: bold;
	line-height: 30px;
	margin-bottom: 8px;
	text-transform: uppercase;

	span {
		margin-left: 10px;
	}

	svg {
  		color: #1a18f7;
		transform: rotate(270deg);
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: none;
	}	
`;

export const CardImageStyled = styled.div`
	display: block;
	position: relative;
`;
