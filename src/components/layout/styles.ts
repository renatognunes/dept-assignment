import { MobileLandscapeMaxWidthPx } from '@styles/variables';
import styled from 'styled-components';

export const LayoutContainerStyled = styled.div`
    margin: 20px;
    position: relative;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
		margin: 0px;
	}
`;
