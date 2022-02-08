import {
    useReducer, useEffect, useRef,
} from 'react';

import { ContentType, PartnersType } from '../../types';

export enum FetchActions {
    FETCHING = 'fetching',
    FETCHED = 'fetched',
    FETCH_ERROR = 'error',
}

type PayloadTypes = ContentType[] | PartnersType[];

interface Action {
    type: FetchActions,
    payload: PayloadTypes
}

interface State {
    status: string;
    data: PayloadTypes
}

const initialState: State = {
    status: 'idle',
    data: [],
};

const useFetch = (url: string) => {
    const cache = useRef<Record<string, PayloadTypes>>({});

    const [state, dispatch] = useReducer((currentState: State, action: Action): State => {
        switch (action.type) {
            case FetchActions.FETCHING:
                return {
                    ...initialState,
                    status: FetchActions.FETCHING,
                };
            case FetchActions.FETCHED:
                return {
                    ...initialState,
                    status: FetchActions.FETCHED,
                    data: action.payload,
                };
            case FetchActions.FETCH_ERROR:
                return {
                    ...initialState,
                    status: FetchActions.FETCH_ERROR,
                };
            default:
                return currentState;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        if (!url) return undefined;

        const fetchData = async () => {
            dispatch({ type: FetchActions.FETCHING, payload: [] });
            if (cache.current[url]) {
                const data = cache.current[url];

                dispatch({ type: FetchActions.FETCHED, payload: data });

                return;
            }
            try {
                const response = await fetch(url);
                const data = await response.json();

                cache.current[url] = data;

                if (cancelRequest) { return; }

                dispatch({ type: FetchActions.FETCHED, payload: data });
            } catch (error) {
                if (cancelRequest) { return; }

                if (error instanceof Error) {
                    dispatch({ type: FetchActions.FETCH_ERROR, payload: [] });

                    // eslint-disable-next-line no-console
                    console.error(error.message);
                }
            }
        };

        fetchData();

        return function cleanup() {
            cancelRequest = true;
        };
    }, [url]);

    return state;
};

export default useFetch;
