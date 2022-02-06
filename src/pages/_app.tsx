/* eslint-disable react/jsx-props-no-spreading */
import Layout from '@components/layout';
import type { AppProps } from 'next/app';

import { GlobalStyles } from '@styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
