import { TekoFontFamily } from '@styles/variables';
import styled from 'styled-components';

export const BoilerplateContentStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-family: ${TekoFontFamily};
	font-size: 50px;
	font-weight: 500;
	height: 500px;
	justify-content: center;
`;

export const ReturnLInkStyled = styled.div`
	background: #0e0e0e;
	color: white;
	cursor: pointer;
	font-size: 24px;
	margin-top: 10px;
	padding: 6px 30px 4px 30px;
`;
