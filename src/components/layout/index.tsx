import React, { ReactNode } from 'react';

import Navbar from './navbar';
import Footer from './footer';

import { LayoutContainerStyled } from './styles';

function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <LayoutContainerStyled>
                <Navbar />
                { children }
            </LayoutContainerStyled>
            <Footer />
        </div>
    );
}

export default Layout;
