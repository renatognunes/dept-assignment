import React, { useRef } from 'react';

import { DropdownCategories, DropdownIndustries } from '@components/enums';

import {
    DropdownContainerStyled,
    DropdownItemStyled,
    DropdownTextStyled,
    DropdownOptionStyled,
    DropdownOptionTextStyled,
} from './styles';

type Filter = {
    category: DropdownCategories,
    industry: DropdownIndustries
};

interface DropdownProps {
    filter: Filter,
    setFilter: (filter: Filter) => void;
}

const Dropdown = ({ filter, setFilter }: DropdownProps) => {
    const {
        categoriesEl, industriesEl, filterByCategory, filterByIndustry,
    } = Dropdown.useComponent({ filter, setFilter });

    return (
        <DropdownContainerStyled>
            <DropdownItemStyled>
                <DropdownTextStyled>
                    Show me
                </DropdownTextStyled>
                <DropdownOptionStyled
                    value={filter.category}
                    ref={categoriesEl}
                    onChange={filterByCategory}
                >
                    <DropdownOptionTextStyled value={DropdownCategories.All}>
                        all work
                    </DropdownOptionTextStyled>
                    {Object.values(DropdownCategories)
                        .slice(1, 5)
                        .map((item) => (
                            <DropdownOptionTextStyled key={item} value={item}>
                                {item}
                            </DropdownOptionTextStyled>
                        ))}
                </DropdownOptionStyled>
            </DropdownItemStyled>
            <DropdownItemStyled>
                <DropdownTextStyled>
                    In
                </DropdownTextStyled>
                <DropdownOptionStyled
                    value={filter.industry}
                    ref={industriesEl}
                    onChange={filterByIndustry}
                >
                    <DropdownOptionTextStyled value={DropdownCategories.All}>
                        all industries
                    </DropdownOptionTextStyled>
                    {Object.values(DropdownIndustries)
                        .slice(1, 5)
                        .map((item) => (
                            <DropdownOptionTextStyled key={item} value={item}>
                                {item}
                            </DropdownOptionTextStyled>
                        ))}
                </DropdownOptionStyled>
            </DropdownItemStyled>
        </DropdownContainerStyled>
    );
};

Dropdown.useComponent = ({ filter, setFilter }: DropdownProps) => {
    const categoriesEl = useRef<HTMLSelectElement>(null);
    const industriesEl = useRef<HTMLSelectElement>(null);

    const filterByCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter,
            category: e.target.value as DropdownCategories,
        });

        categoriesEl.current?.blur();
    };

    const filterByIndustry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter,
            industry: e.currentTarget.value as DropdownIndustries,
        });

        industriesEl.current?.blur();
    };

    return {
        categoriesEl,
        industriesEl,
        filterByCategory,
        filterByIndustry,
    };
};

export default Dropdown;
