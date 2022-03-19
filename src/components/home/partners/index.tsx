/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import React, { useMemo } from 'react';

import { ENDPOINT_PARTNERS } from 'src/config';

import { PartnersType } from 'src/types';
import { useScreenSize, useFetch, FetchActions } from '@components/hooks';
import { MobileLandscapeMaxWidth } from '@styles/variables';

import { Loading } from '@components/common';
import {
    PartnersContainerStyled,
    PartnersTitleTextStyled,
    PartnersDescriptionTextStyled,
    PartnersLogosWrapperStyled,
    PartnerLogoStyled,
} from './styles';

const Partners = ({ partnersList }: any) => {
    const { partners } = Partners.useComponent({ partnersList });

    // if (status !== FetchActions.FETCHED) {
    //     return (
    //         <Loading />
    //     );
    // }

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
                            width={120}
                            height={100}
                        />
                    </PartnerLogoStyled>
                ))}
            </PartnersLogosWrapperStyled>
        </PartnersContainerStyled>
    );
};

Partners.useComponent = ({ partnersList }: any) => {
    // const { data, status } = useFetch(ENDPOINT_PARTNERS);
    const screenSize = useScreenSize();

    const partners = useMemo(() => {
        if (screenSize.width > 0 && screenSize.width < MobileLandscapeMaxWidth) {
            return partnersList.slice(0, 6) as PartnersType[];
        }

        return partnersList as PartnersType[];
    }, [screenSize, partnersList]);

    return {
        partners,
    };
};

export default Partners;
