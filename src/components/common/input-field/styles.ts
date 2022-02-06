import styled from 'styled-components';

export const InputFieldStyled = styled.div`
	max-width: 300px;

	label, input, textarea {
		display: block;
	}

	label {
		color: #272727;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 15px;
		font-weight: bold;
		line-height: 30px;
		text-transform: uppercase;
		width: fit-content;
	}

	input, textarea {
		border: none;
		border-bottom: 1px solid #dddddd;
		font-size: 15px;
		height: 30px;
		width: 300px;
	}

	textarea {
		height: auto;
	}

	span {
		color: #ff2929;
		display: block;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 13px;
		margin: 11px 0px;
	}
`;
