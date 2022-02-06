/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { useEffect, useState, useMemo } from 'react';

import { ENDPOINT_PARTNERS } from 'src/config';

import { PartnersType } from 'src/types';
import { useScreenSize } from 'src/hooks';
import { MobileLandscapeMaxWidth } from '@styles/variables';

import Image from 'next/image';
import {
    PartnersContainerStyled,
    PartnersTitleTextStyled,
    PartnersDescriptionTextStyled,
    PartnersLogosWrapperStyled,
    PartnerLogoStyled,
} from './styles';

const Partners = () => {
    const { partners } = Partners.useComponent();

    return (
        <PartnersContainerStyled>
            <PartnersTitleTextStyled>
                Clients
            </PartnersTitleTextStyled>
            <PartnersDescriptionTextStyled>
                We value a great working relationship with our clients above all else.
                It’s why they often come to our parties.
                It’s also why we’re able to challenge and inspire them to reach for the stars.
            </PartnersDescriptionTextStyled>
            <PartnersLogosWrapperStyled>
                {partners.map((partner) => (
                    <PartnerLogoStyled key={partner.name}>
                        <img
                            alt={partner.name}
                            src={`/assets/logos/${partner.image}`}
                            width={100}
                            height={100}
                        />
                    </PartnerLogoStyled>
                ))}
            </PartnersLogosWrapperStyled>
        </PartnersContainerStyled>
    );
};

Partners.useComponent = () => {
    const [partners, setPartners] = useState<PartnersType[]>([]);
    const screenSize = useScreenSize();

    useEffect(() => {
        const getPartners = async () => {
            try {
                const response = await fetch(ENDPOINT_PARTNERS);

                setPartners(await response.json());
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Something went wrong', error);
            }
        };

        getPartners();
    }, []);

    const filteredPartners = useMemo(() => {
        if (screenSize.width > 0 && screenSize.width < MobileLandscapeMaxWidth) {
            return partners.slice(0, 6);
        }

        return partners;
    }, [screenSize, partners]);

    return {
        partners: filteredPartners,
    };
};

export default Partners;
