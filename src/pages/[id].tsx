import type { NextPage } from 'next';
import Head from 'next/head';
import Boilerplate from '@components/boilerplate';

const PageID: NextPage = () => (
    <>
        <Head>
            <meta name="description" content="Boilerplate page without content" key="Boilerplate" />
            <link rel="icon" href="/favicon.ico" />
            <title>Dept Agency</title>
        </Head>
        <Boilerplate />
    </>
);

export default PageID;
