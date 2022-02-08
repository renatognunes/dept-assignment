import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import headerImage from '@public/assets/images/header.jpg';

import {
    HeaderContainerStyled,
    HeadingTextStyled,
    HeaderButtonStyled,
} from './styles';

const Header = () => (
    <HeaderContainerStyled>
        <Image
            alt="Developer Image"
            src={headerImage}
            layout="responsive"
            objectFit="cover"
            priority
            placeholder="blur"
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

export default Header;
