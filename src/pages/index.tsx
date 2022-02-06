import type { NextPage } from 'next';
import Head from 'next/head';

import { HomePage } from '@components/index';

const Home: NextPage = () => (
    <div>
        <Head>
            <title>Dept Agency</title>
            <meta name="Dept Agency" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage />
    </div>
);

export default Home;
