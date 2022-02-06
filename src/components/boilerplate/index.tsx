import React from 'react';
import Link from 'next/link';

import { BoilerplateContentStyled, ReturnLInkStyled } from './styles';

const Boilerplate = () => (
    <div>
        <BoilerplateContentStyled>
            PAGE CONTENT
            <Link href="/" passHref>
                <ReturnLInkStyled>
                    RETURN
                </ReturnLInkStyled>
            </Link>
        </BoilerplateContentStyled>
    </div>
);

export default Boilerplate;
