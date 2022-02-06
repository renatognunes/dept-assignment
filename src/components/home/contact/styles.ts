import { TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx } from '@styles/variables';
import styled, { css } from 'styled-components';

interface ContactSuccessMessageStyledProps {
    $show: boolean
}

export const ContactContainerStyled = styled.div`
	align-items: flex-start;
	display: flex;
	justify-content: space-between;
	margin: 80px 100px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
		margin: 40px 60px 50px;
	}
	
	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		margin: 40px 37px 50px;
	}
`;

export const ContactTextWrapperStyled = styled.div`
	margin-right: 50px;
	max-width: 300px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin-right: 0px;
		margin-bottom: 28px;
		max-width: 100%;
		width: 100%;
	}

`;

export const ContactTextStyled = styled.h4`
	color: #0e0e0e;
	font-family: ${TekoFontFamily};
	font-size: 60px;
	font-weight: 400;
	line-height: 60px;
	margin: 0px;
	text-align: left;
	text-transform: uppercase;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		font-size: 30px;
		line-height: 32px;
		text-align: center;

		br {
			display: none;
		}
	}
`;

export const ContactSuccessMessageStyled = styled.div<ContactSuccessMessageStyledProps>`
	box-sizing: content-box;
	color: green;
	font-family: ${TekoFontFamily};
	font-size: 30px;
	height: 0;
	margin-top: 20px;
    overflow: hidden;
	text-align: center;
	transition: height 400ms linear;

	${({ $show }) => $show && css`
		height: 54px;
	`};
`;
