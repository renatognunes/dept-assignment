import { TekoFontFamily, MobileLandscapeMaxWidthPx } from '@styles/variables';
import styled from 'styled-components';

export const MenuContainerStyled = styled.div`
	background-color: #0e0e0e;
	border: 20px solid white;
	color: #fff;
	height: 100vh;
	overflow-y: hidden;
	padding: 28px 100px;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		border: none;
		padding: 20px;
	}
`;

export const MenuNavbarWrapperStyled = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;	

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		svg {
			width: 50px;
		}
	}
`;

export const CloseButtonStyled = styled.button`
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
	font-size: 22px;
	font-weight: 400;
`;

export const MenuContentStyled = styled.div`
	box-sizing: border-box;
	position: relative;
`;

export const MenuListStyled = styled.div`
	-ms-overflow-style: none;
	display: flex;
	flex-direction: column;
	height: 72vh;
	margin-top: 75px;
	overflow-y: scroll;
	position: relative;
	scrollbar-width: none;
	width: 100%;
	
	&::-webkit-scrollbar {
		display: none;
	}
	
	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin-top: 65px;
	} 
`;

export const MenuListShadeStyled = styled.div`
	background-image: linear-gradient(rgba(14, 14, 14,0), rgba(14, 14, 14,1), rgba(14, 14, 14,1));
	bottom: 0;
	height: 90px;
	pointer-events: none;
	position: absolute; 
	width: 100%;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		height: 50px;
	}
`;

export const MenuItemStyled = styled.div`
	align-items: center;
	border-bottom: 1px solid rgba(163, 163, 163, 0.5);
	cursor: pointer;
	display: flex;
	font-family: ${TekoFontFamily};
	font-size: 110px;
	font-weight: 400;
	justify-content: flex-end;
	line-height: 110px;
	margin: 10px 0px 0px;
	text-align: right;
	text-transform: uppercase;

	svg {
		margin-bottom: 15px;
		margin-right: 40px;
		opacity: 0;
		transition: visibility 0s, opacity 150ms linear;
		visibility: hidden;
	}

	&:hover {
		svg {
			opacity: 1;
			visibility: visible;
		}
	}

	&:last-child {
		margin-bottom: 30px;
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		font-size: 50px;
		line-height: 50px;

		svg {
			margin-bottom: 8px;
			margin-right: 10px;	
			transform: scale(0.5);	
		}
	}
`;

export const MenuLocationsWrapperStyled = styled.ul`
	background: #0e0e0e;
	color: #FFF;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-weight: bold;
	left: 0;
	line-height: 19px;
	margin-top: 0px;
	padding: 5px 0px;
	position: absolute;
	text-decoration: none;
	text-transform: uppercase;
	top: -30px;
	width: 130px;
	z-index: 1;
	
	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: none;
	}
	`;

export const MenuLocationStyled = styled.li`
	cursor: pointer;
	list-style: none;
	margin: 0px;
	text-decoration: none;

	svg {
		display: none;
		margin-right: 10px;
		transform: rotate(270deg);
	}

	&:hover {
		svg {
			display: unset;
		}
	}

	&:first-child {
		opacity: 0.5;
	}
`;

export const MenuSocialWrapperStyled = styled.ul`
	background: #0e0e0e;
	bottom: 0;
	color: #FFF;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	font-weight: bold;
	left: 0;
	line-height: 19px;
	padding: 5px 0px;
	position: absolute;
	text-decoration: none;
	text-transform: uppercase;
	z-index: 1;

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		display: none;
	}
`;

export const MenuSocialStyled = styled.li`
	cursor: pointer;
	list-style: none;
	margin: 0px;
	text-decoration: none;
`;
