import type { NextPage } from 'next';
import Head from 'next/head';

import { HomePage } from '@components/index';

const Home: NextPage = () => (
    <>
        <Head>
            <meta name="description" content="Landing page of Dept Agency assignment test" key="Assignment" />
            <link rel="icon" href="/favicon.ico" />
            <title>Dept Agency</title>
        </Head>
        <HomePage />
    </>
);

export default Home;
