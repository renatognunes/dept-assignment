import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeout);
            // change screen size from the state object after 200 milliseconds
            timeout = setTimeout(() => {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, 200);
        };

        resizeListener();

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;
