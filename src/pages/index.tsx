import type { NextPage } from 'next';
import Head from 'next/head';

import { HomePage } from '@components/index';

import { ENDPOINT_CONTENT, ENDPOINT_PARTNERS } from 'src/config';

export async function getStaticProps() {
    const casesResponse = await fetch(ENDPOINT_CONTENT);
    const cases = await casesResponse.json();

    const partnersResponse = await fetch(ENDPOINT_PARTNERS);
    const partners = await partnersResponse.json();

    return {
        props: {
            cases,
            partners,
        },
    };
}

const Home: NextPage = ({ cases, partners }: { cases: any, partners: any }) => (
    <>
        <Head>
            <meta name="description" content="Landing page of Dept Agency assignment test" key="Assignment" />
            <link rel="icon" href="/favicon.ico" />
            <title>Dept Agency</title>
        </Head>
        <HomePage casesList={cases} partnersList={partners} />
    </>
);

export default Home;
