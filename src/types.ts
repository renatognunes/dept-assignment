import { CardTypes, DropdownCategories, DropdownIndustries } from '@components/enums';

export interface PartnersType {
    name: string;
    image: string;
}

export interface ContentType {
    id: number;
    size: CardTypes;
    title: string;
    desc: string;
    image: string | null;
    category: DropdownCategories;
    industry: DropdownIndustries;
}
