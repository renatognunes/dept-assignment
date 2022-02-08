import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ContentType } from 'src/types';
import { CardTypes } from '@components/enums';
import IconDropdown from '@public/assets/icons/icon-dropdown.svg';

import { useScreenSize } from '@components/hooks';
import { MobilePortraitMaxWidth } from '@styles/variables';
import {
    CardContainerStyled,
    CardBrandTextStyled,
    CardDescriptionStyled,
    CardLinkStyled,
    CardImageStyled,
} from './styles';

interface CardProps {
    item: ContentType
}

const Card = ({ item }: CardProps) => {
    const { isSquare } = Card.useComponent({ item });

    return (
        <CardContainerStyled $variant={item.size}>
            {item.image && (
                <CardImageStyled>
                    <Image
                        alt={item.title}
                        src={`/assets/images/${item.image}`}
                        layout="responsive"
                        height={500}
                        width={isSquare ? 585 : 800}
                        objectFit="cover"
                        quality={100}
                    />
                </CardImageStyled>
            )}
            <CardBrandTextStyled>
                {item.title}
            </CardBrandTextStyled>
            <CardDescriptionStyled $variant={item.size}>
                {item.desc}
            </CardDescriptionStyled>
            <Link href={`/case_${item.id}`} passHref>
                <CardLinkStyled>
                    <IconDropdown />
                    <span>View Case</span>
                </CardLinkStyled>
            </Link>
        </CardContainerStyled>

    );
};

Card.useComponent = ({ item }: CardProps) => {
    const screenSize = useScreenSize();

    const isSquare = item?.size === CardTypes.Medium
        || (screenSize.width > 0 && screenSize.width < MobilePortraitMaxWidth);

    return {
        isSquare,
    };
};

export default Card;
