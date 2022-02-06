import type { NextPage } from 'next';
import Head from 'next/head';
import Boilerplate from '@components/boilerplate';

const PageID: NextPage = () => (
    <div>
        <Head>
            <title>Dept Agency</title>
            <meta name="Dept Agency" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Boilerplate />
    </div>
);

export default PageID;
