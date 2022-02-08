import React, { useEffect } from 'react';
import Link from 'next/link';

import {
    MenuLinks, MenuSocials, MenuLanguages,
} from '@components/enums';

import IconDept from '@public/assets/icons/icon-dept.svg';
import IconArrow from '@public/assets/icons/icon-arrow.svg';
import IconDropdown from '@public/assets/icons/icon-dropdown.svg';

import {
    MenuContainerStyled,
    MenuNavbarWrapperStyled,
    CloseButtonStyled,
    MenuContentStyled,
    MenuListStyled,
    MenuItemStyled,
    MenuLocationsWrapperStyled,
    MenuLocationStyled,
    MenuSocialWrapperStyled,
    MenuSocialStyled,
    MenuListShadeStyled,
} from './styles';

interface MenuProps {
    closeMenu: () => void;
}

const Menu = ({ closeMenu }: MenuProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <MenuContainerStyled>
            <MenuNavbarWrapperStyled>
                <IconDept />
                <CloseButtonStyled
                    onClick={closeMenu}
                >
                    ✕
                </CloseButtonStyled>
            </MenuNavbarWrapperStyled>
            <MenuContentStyled>
                <MenuListStyled>
                    {Object.values(MenuLinks).map((link) => (
                        <Link key={link} href={`/${link === 'home' ? '' : link}`} passHref>
                            <MenuItemStyled onClick={closeMenu}>
                                <IconArrow />
                                {link}
                            </MenuItemStyled>
                        </Link>
                    ))}
                </MenuListStyled>
                <MenuListShadeStyled />
                <MenuLocationsWrapperStyled>
                    <MenuLocationStyled>
                        Landen
                    </MenuLocationStyled>
                    {Object.values(MenuLanguages).map((lang) => (
                        <MenuLocationStyled key={lang}>
                            <IconDropdown />
                            {lang}
                        </MenuLocationStyled>
                    ))}
                </MenuLocationsWrapperStyled>
                <MenuSocialWrapperStyled>
                    {Object.values(MenuSocials).map((social) => (
                        <a
                            key={social}
                            aria-label={social}
                            href={`https://${social}.com`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MenuSocialStyled>
                                {social}
                            </MenuSocialStyled>
                        </a>
                    ))}
                </MenuSocialWrapperStyled>
            </MenuContentStyled>
        </MenuContainerStyled>
    );
};

export default Menu;
