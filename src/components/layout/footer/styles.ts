import styled from 'styled-components';
import { TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx } from '@styles/variables';

export const FooterContainerStyled = styled.div`
	display: flex;
`;

export const FooterLeftStyled = styled.div`
	background-color: #0e0e0e;
	color: #fff;
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 100px 100px 112px 120px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		width: 100%;
		padding: 60px;
	}
	
	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		padding: 60px 20px;
	}
`;

export const FooterRightStyled = styled.div`
	align-items: center;
	color: #1a18f7;
	display: flex;
	flex-direction: column;
	font-family: ${TekoFontFamily};
	font-size: 22px;
	font-weight: 400;
	justify-content: center;
	line-height: 32px;
	text-transform: uppercase;
	width: 120px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: none;
	}
`;

export const FooterLogoStyled = styled.div`
	width: 200px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: none;
	}
`;

export const FooterTopStyled = styled.div`
	align-items: center;
	border-bottom: 2px solid #3e3e3e;
	display: flex;
	font-family: ${TekoFontFamily};
	font-size: 18px;
	font-weight: 400;
	justify-content: space-between;
	line-height: 32px;
	padding-bottom: 20px;
	text-transform: uppercase;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		align-items: flex-start;
		font-size: 32px;
	}
`;

export const FooterLinksStyled = styled.div`
	display: flex;
	flex: 1;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
	}
`;

export const FooterLinkStyled = styled.div`
	cursor: pointer;
	margin: 5px 13.5px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
		margin: 0px;
		margin-bottom: 20px;
	}
`;

export const FooterSocialLinksStyled = styled.div`
	display: flex;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const FooterSocialStyled = styled.div`
	margin: 0 15px;
	width: 15px;

	svg {
		height: 15px;
		width: 15px;
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin: 0px 5px 30px 0px;
		width: 15px;

		svg {
			height: 22px;
			width: 22px;	
		}
	}
`;

export const FooterBottomStyled = styled.div`
	display: flex;
	padding-top: 56px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
		padding-top: 40px;
	}
`;

export const FooterTextStyled = styled.span`
	color: #808080;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	line-height: 21px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: block;
	}
`;

export const FooterTextWrapperStyled = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	margin-left: 200px;

	${FooterTextStyled} {
		margin: 0px 12px;
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin-left: 0px;
		margin-bottom: 25px;
		text-align: left;
		flex: 0;
		flex-direction: column;

		${FooterTextStyled} {
		margin: 0px;
	}
	}
`;

export const ButtonScrollToTopStyled = styled.div`
	align-items: center;
	cursor: pointer;	
	display: flex;
	flex-direction: column;
`;
