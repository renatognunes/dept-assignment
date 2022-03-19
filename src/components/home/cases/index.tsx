/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import React, { useState, useMemo } from 'react';

import { ENDPOINT_CONTENT } from 'src/config';
import { ContentType } from 'src/types';

import { Loading } from '@components/common';

import { CardTypes, DropdownCategories, DropdownIndustries } from '@components/enums';
import { useFetch, FetchActions } from '@components/hooks';
import Dropdown from '../dropdown';
import Card from './case-card';
import Quote from './quote';

import {
    HomeDropdownWrapperStyled,
    MainContentStyled,
    GridCasesWrapperStyled,
    SingleCaseWrapperStyled,
    SmallCasesWrapperStyled,
    TextStyled,
} from './styles';

const Cases = ({ cases }) => {
    const {
        list, hasFilter, filter, setFilter,
    } = Cases.useComponent({ cases });

    // if (status !== FetchActions.FETCHED) {
    //     return (
    //         <Loading />
    //     );
    // }

    return (
        <MainContentStyled>
            <>
                <HomeDropdownWrapperStyled>
                    <Dropdown
                        filter={filter}
                        setFilter={setFilter}
                    />
                </HomeDropdownWrapperStyled>
                {!list.length && (
                    <TextStyled>
                        No results found.
                    </TextStyled>
                )}
                {hasFilter ? (
                    <>
                        <GridCasesWrapperStyled>
                            {list.filter((item) => item.size !== CardTypes.Small)
                                .map((item) => (
                                    <Card key={item.id} item={item} />
                                ))}
                        </GridCasesWrapperStyled>
                        <GridCasesWrapperStyled $fullWidth>
                            {list.filter((item) => item.size === CardTypes.Small)
                                .map((item) => (
                                    <Card key={item.id} item={item} />
                                ))}
                        </GridCasesWrapperStyled>
                        <Quote />
                    </>
                ) : (
                    <>
                        <GridCasesWrapperStyled>
                            {list.slice(0, 4).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </GridCasesWrapperStyled>
                        <SingleCaseWrapperStyled>
                            <Card item={list[4]} />
                            <SmallCasesWrapperStyled>
                                {list.slice(5, 7).map((item) => (
                                    <Card key={item.id} item={item} />
                                ))}
                            </SmallCasesWrapperStyled>
                        </SingleCaseWrapperStyled>
                        <GridCasesWrapperStyled>
                            {list.slice(7, 9).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </GridCasesWrapperStyled>
                        <SingleCaseWrapperStyled $reverse>
                            <Card item={list[9]} />
                            <SmallCasesWrapperStyled>
                                {list.slice(10, 12).map((item) => (
                                    <Card key={item.id} item={item} />
                                ))}
                            </SmallCasesWrapperStyled>
                        </SingleCaseWrapperStyled>
                        <GridCasesWrapperStyled>
                            {list.slice(12, 16).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </GridCasesWrapperStyled>
                        <Quote />
                        <GridCasesWrapperStyled>
                            {list.slice(16, 18).map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </GridCasesWrapperStyled>
                    </>
                )}
            </>
        </MainContentStyled>
    );
};

Cases.useComponent = ({ cases }) => {
    // const { data, status } = useFetch(ENDPOINT_CONTENT);
    const [filter, setFilter] = useState({
        category: DropdownCategories.All,
        industry: DropdownIndustries.All,
    });

    const hasFilter = useMemo(() => filter.category !== DropdownCategories.All || filter.industry !== DropdownIndustries.All, [filter]);

    const list = useMemo(() => {
        if (!hasFilter) { return cases as ContentType[]; }

        return (cases as ContentType[]).filter((item) => {
            return (filter.category === DropdownCategories.All || item.category === filter.category)
                 && (filter.industry === DropdownIndustries.All || item.industry === filter.industry);
        }).map((item) => ({
            ...item,
            size: item.size === CardTypes.Small ? CardTypes.Small : CardTypes.Medium,
        }));
    }, [hasFilter, filter, cases]);

    return {
        list,
        hasFilter,
        filter,
        setFilter,
        // status,
    };
};

export default Cases;
