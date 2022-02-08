import { TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx } from '@styles/variables';
import styled from 'styled-components';

export const PartnersContainerStyled = styled.div`
	background: #f3f6f6;
	padding: 100px 100px 80px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		padding: 40px 60px;
	}

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		padding: 40px 20px;
	}
`;

export const PartnersTitleTextStyled = styled.div`
	color: #0e0e0e;
	font-family: ${TekoFontFamily};
	font-size: 60px;
	text-align: center;
	text-transform: uppercase;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		font-size: 30px;
		line-height: 32px;
	}
`;

export const PartnersDescriptionTextStyled = styled.div`
	color: #0e0e0e;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 17px;
	line-height: 27px;
	margin: 18px auto 0px;
	max-width: 560px;
	text-align: center;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		max-width: 100%;
	}
`;

export const PartnersLogosWrapperStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 82px auto 0 auto;
	max-width: 1000px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin-top: 60px;
	}

	`;

export const PartnerLogoStyled = styled.div`
	align-items: center;
	display: flex;
	flex: 1 0 25%;
	height: 126px;
	justify-content: center;
	margin-bottom: 20px;
	position: relative;
	width: 250px;

	img {
		height: auto; 
		width: auto;
	}
	
	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex: 1 0 50%;
		width: 170px;
		height: 86px;
		margin-bottom: 0px;
		
		img {
			max-width: 120px;
			width:100%; 
			height: auto;
		}
	}
	
	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		img {
			max-width: 90px;
		}
	}
`;
