import styled from 'styled-components';
import { TekoFontFamily, MobileLandscapeMaxWidthPx, MobilePortraitMaxWidthPx } from '@styles/variables';
import { ButtonStyled } from '@components/common/button/styles';

export const HeaderContainerStyled = styled.div`
    display: block;
    position: relative;
    width: 100%;
`;

export const HeadingTextStyled = styled.h3`
    font-family: ${TekoFontFamily};
    font-size: 28vw;
    font-weight: 400;
    left: 25%;
    margin: 0px;
    margin-left: 100px;
    position: absolute;
    text-transform: uppercase;
    top: 42%;
    transform: translate(-50%, -50%);

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        top: 44%;
        margin: 0px;
        left: 50%;
        font-size: 42vw;
    }
`;

export const HeaderButtonStyled = styled.div`
    background-color: #0e0e0e;
    bottom: 0;
    color: #FFF;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px; 
    font-weight: bold;
    line-height: 30px;
    margin-bottom: 80px;
    margin-right: 100px;
    padding: 10px 45px;
    position: absolute;
    right: 0;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        position: relative;
        margin: 20px 40px 0px;

        ${ButtonStyled} {
            width: 100%;
        }  
    }

    @media (max-width: ${MobilePortraitMaxWidthPx}) {
        margin: 20px 20px 0px;
    }
`;
