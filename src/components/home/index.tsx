/* eslint-disable max-len */
import React, {
    useEffect, useState, useCallback,
} from 'react';

import { ENDPOINT_CONTENT } from 'src/config';
import { ContentType } from 'src/types';

import Header from '@components/home/header';
import Dropdown from '@components/home/dropdown';
import Card from '@components/home/card';
import Partners from '@components/home/partners';
import Contact from '@components/home/contact';
import { CardTypes } from '@components/enums';

import {
    HomeDropdownWrapperStyled,
    MainContentStyled,
    GridCasesWrapperStyled,
    SingleCaseWrapperStyled,
    SmallCasesWrapperStyled,
    QuoteWrapperStyled,
    QuoteContentStyled,
    QuoteTextStyled,
    QuoteAuthorStyled,

} from './styles';

const Home = () => {
    const { list, filter, setFilter } = Home.useComponent();

    return (
        <div>
            <Header />
            <MainContentStyled>
                <>
                    <HomeDropdownWrapperStyled>
                        <Dropdown
                            filter={filter}
                            setFilter={setFilter}
                        />
                    </HomeDropdownWrapperStyled>
                    <GridCasesWrapperStyled>
                        {list.mediumCases.slice(0, 4).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </GridCasesWrapperStyled>
                    <SingleCaseWrapperStyled>
                        <Card item={list.largeCases[0]} />
                        <SmallCasesWrapperStyled>
                            {list.smallCases.slice(0, 2).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </SmallCasesWrapperStyled>
                    </SingleCaseWrapperStyled>
                    <GridCasesWrapperStyled>
                        {list.mediumCases.slice(4, 6).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </GridCasesWrapperStyled>
                    <SingleCaseWrapperStyled $reverse>
                        <Card item={list.largeCases[1]} />
                        <SmallCasesWrapperStyled>
                            {list.smallCases.slice(2, 4).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </SmallCasesWrapperStyled>
                    </SingleCaseWrapperStyled>
                    <GridCasesWrapperStyled>
                        {list.mediumCases.slice(6, 10).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </GridCasesWrapperStyled>
                    <QuoteWrapperStyled>
                        <QuoteContentStyled>
                            <QuoteTextStyled>
                                “Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”
                            </QuoteTextStyled>
                            <QuoteAuthorStyled>
                                MATTIJS TEN BRINK – CEO, TRANSAVIA
                            </QuoteAuthorStyled>
                        </QuoteContentStyled>
                    </QuoteWrapperStyled>
                    <GridCasesWrapperStyled>
                        {list.mediumCases.slice(10, 12).map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </GridCasesWrapperStyled>
                </>
            </MainContentStyled>
            <Partners />
            <Contact />
        </div>
    );
};

Home.useComponent = () => {
    const [filter, setFilter] = useState({
        category: 'all',
        industry: 'all',
    });

    const [list, setList] = useState<Record<string, ContentType[]>>({
        smallCases: [],
        mediumCases: [],
        largeCases: [],
    });

    const filteredList = useCallback((casesList: any[]): void => {
        const cases: Record<string, ContentType[]> = {
            smallCases: [],
            mediumCases: [],
            largeCases: [],
        };

        casesList.forEach((item) => {
            switch (item.size) {
                case CardTypes.Small:
                    cases.smallCases.push(item);
                    break;
                case CardTypes.Medium:
                    cases.mediumCases.push(item);
                    break;
                case CardTypes.Large:
                    cases.largeCases.push(item);
                    break;

                default:
                    break;
            }
        });

        setList(cases);
    }, []);

    useEffect(() => {
        const getCases = async () => {
            try {
                const res = await fetch(ENDPOINT_CONTENT);
                const cases = await res.json();

                filteredList(cases);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Something went wrong', error);
            }
        };

        getCases();
    }, [filteredList]);

    return {
        list,
        filter,
        setFilter,
    };
};

export default Home;
