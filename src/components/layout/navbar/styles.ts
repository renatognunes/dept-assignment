import styled from 'styled-components';

import { TekoFontFamily, MobileLandscapeMaxWidthPx } from '@styles/variables';

export const NavbarContainerStyled = styled.div`
    box-sizing: border-box;
    padding: 0 100px;
    position: absolute;
    width: 100%;
    z-index: 1;
    
    &:after {
        border-bottom: 1px solid #0e0e0e;
        content: "";
        display: block;
    }

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        position: relative;
        padding: 0px 20px;

        &:after {
            display: none;
        }
    }
`;

export const NavbarStyled = styled.div` 
    display: flex;
    height: 80px;
    justify-content: space-between;
    z-index: 1;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        align-items: center;
        height: 50px;
    }
`;

export const NavbarLeftStyled = styled.div`
    align-items: center;
    display: flex;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        width: 50px;
    } 
`;

export const NavbarRightStyled = styled.div`
    align-items: flex-end;
    display: flex;
    height: 100%;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        align-items: center;
    } 
`;

export const MenuTextStyled = styled.h4`
    color: #0e0e0e;
    font-family: ${TekoFontFamily};
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    margin: 0px 26px 0 0;
    text-transform: uppercase;

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        font-size: 22px;
        font-weight: 500;
        margin-right: 17px;
    } 
`;

export const DividerStyled = styled.div`
    background-color: #0e0e0e;
    height: 1px;
    margin: 6px 0 0;
    width: 100%;
`;

export const MenuWrapperStyled = styled.div`
    align-items: center;
    display: flex;
    height: auto;
    margin-bottom: 4px;

    svg {
        margin-bottom: 3px;
    }

    @media (max-width: ${MobileLandscapeMaxWidthPx}) {
        margin-bottom: 0px;
        margin-top: 2px;
    } 
`;

export const MenuButtonStyled = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
