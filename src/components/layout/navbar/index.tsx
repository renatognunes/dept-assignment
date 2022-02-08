import React from 'react';
import dynamic from 'next/dynamic';

import IconDept from '@public/assets/icons/icon-dept.svg';
import IconMenu from '@public/assets/icons/icon-menu.svg';
import SmoothRender from 'react-smooth-render';

import {
    NavbarContainerStyled,
    NavbarStyled,
    NavbarLeftStyled,
    NavbarRightStyled,
    MenuTextStyled,
    MenuWrapperStyled,
    MenuButtonStyled,
} from './styles';

const Menu = dynamic(() => import('./menu'));

function Navbar() {
    const [menu, toggleMenu] = React.useState(false);

    // Workaround for SmoothRender library.
    const hasLoaded = typeof window !== 'undefined';

    return (
        <NavbarContainerStyled>
            <NavbarStyled>
                <NavbarLeftStyled>
                    <IconDept />
                </NavbarLeftStyled>
                <NavbarRightStyled>
                    <MenuWrapperStyled>
                        <MenuTextStyled>
                            Menu
                        </MenuTextStyled>
                        <MenuButtonStyled
                            aria-label="Toggle menu"
                            onClick={() => toggleMenu(!menu)}
                            tabIndex={0}
                            type="button"
                        >
                            <IconMenu />
                        </MenuButtonStyled>
                    </MenuWrapperStyled>
                </NavbarRightStyled>
            </NavbarStyled>
            {hasLoaded && (
                <SmoothRender hidden={!menu} timing={350}>
                    <Menu closeMenu={() => toggleMenu(false)} />
                </SmoothRender>
            )}
        </NavbarContainerStyled>
    );
}

export default Navbar;
