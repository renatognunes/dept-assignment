import styled from 'styled-components';
import { TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx } from '@styles/variables';

export const DropdownContainerStyled = styled.div`
	align-items: center;
	display: flex;
	font-family: ${TekoFontFamily};
	font-size: 30px;
	font-weight: 400;
	line-height: 32px;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin-top: 8px;
	}

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		flex-direction: column;
		font-size: 24px;
		line-height: 24px;
		align-items: flex-start;
	}
`;

export const DropdownItemStyled = styled.div`
	align-items: center;
	display: flex;
	margin-right: 25px;

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		margin-bottom: 18px;
		margin-right: 0px;

		&:last-child {
			margin-bottom: 10px;
		}
	}
`;

export const DropdownTextStyled = styled.div`
	color: #575757;
	margin-right: 6px;
	
`;

export const DropdownOptionStyled = styled.select`
	-moz-appearance:none !important;
	-webkit-appearance: none !important;
	align-items: center;
    appearance: none !important;
    background: url('/assets/icons/icon-dropdown.svg') no-repeat; 
    background-position: 100% center !important;
	border: none;
  	border-bottom: 1px solid black;
	border-radius: 0px;
    box-sizing:border-box;
    color: #0e0e0e;
    display: flex; 
    font-family: ${TekoFontFamily};
	font-size: 30px;
	line-height: 30px;
	padding-right: 1rem !important;
	padding-top: 1px;

	@media (max-width: ${MobilePortraitMaxWidthPx}) {
		font-size: 24px;
		line-height: 24px;
	}	
`;

export const DropdownOptionTextStyled = styled.option`
	color: #0e0e0e;
	margin-right: 10px;
	width: 100%;
`;
