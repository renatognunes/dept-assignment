import type { NextPage } from 'next';
import Head from 'next/head';
import Boilerplate from '@components/boilerplate';
import { ENDPOINT_CONTENT } from 'src/config';

export async function getStaticPaths() {
    const casesResponse = await fetch(ENDPOINT_CONTENT);
    const cases = await casesResponse.json();

    return {
        paths: cases.map(
            (item: any) => ({
                params: {
                    id: String(item.id),
                },
            }),
        ),
        fallback: false,
    };
}

export function getStaticProps({ params }: any) {
    return {
        props: {
            id: params.id,
        },
    };
}

const PageID: NextPage = ({ id }: any) => (
    <>
        <Head>
            <meta name="description" content="Boilerplate page without content" key="Boilerplate" />
            <link rel="icon" href="/favicon.ico" />
            <title>Dept Agency</title>
        </Head>
        <Boilerplate id={id} />
    </>
);

export default PageID;
