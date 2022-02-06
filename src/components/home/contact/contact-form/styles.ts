import styled from 'styled-components';
import { MobileLandscapeMaxWidthPx } from '@styles/variables';

import { InputFieldStyled } from '@components/common/input-field/styles';
import { ButtonStyled } from '@components/common/button/styles';

export const FormFieldWrapperStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	${InputFieldStyled} {
		flex: 1 0 50%;
		margin: 0 25px;
		margin-bottom: 70px;

		&:last-child {
			margin-bottom: 30px;
		}
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		flex-direction: column;
		width: 100%;

		${InputFieldStyled} {
			flex: 1;
			margin: 0px;
			margin-bottom: 28px;
			width: 100%;
			max-width: 100%;

			input, label, textarea {
				width: 100%;
			}

			&:last-child {
				margin-bottom: 20px;
			}
		}
	}
`;

export const ContactFormWrapperStyled = styled.div`
	${ButtonStyled} {
		margin-left: 25px
	}

	@media (max-width: ${MobileLandscapeMaxWidthPx}) {
		width: 100%;

		${ButtonStyled} {
			margin-left: 0px;
		}
	}
`;
