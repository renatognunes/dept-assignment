import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import headerImage from '@public/assets/images/header.jpg';

import { useScreenSize } from 'src/hooks';
import { MobilePortraitMaxWidth } from '@styles/variables';
import {
    HeaderContainerStyled,
    HeadingTextStyled,
    HeaderButtonStyled,
} from './styles';

const Header = () => {
    const screenSize = useScreenSize();

    const isMobile = screenSize.width > 0 && screenSize.width < MobilePortraitMaxWidth;

    return (
        <HeaderContainerStyled>
            <Image
                alt="Developer"
                src={headerImage}
                layout="responsive"
                objectFit="cover"
                priority
                height={isMobile ? 520 : 0}
                width={isMobile ? 620 : 0}
                quality={100}
            />
            <HeadingTextStyled>
                Work
            </HeadingTextStyled>
            <HeaderButtonStyled>
                <Link href="/cases">
                    View Case
                </Link>
            </HeaderButtonStyled>
        </HeaderContainerStyled>
    );
};

export default Header;
