import React from 'react';

import IconDept from '@public/assets/icons/icon-dept.svg';
import IconFb from '@public/assets/icons/icon-fb.svg';
import IconInstagram from '@public/assets/icons/icon-instagram.svg';
import IconTwitter from '@public/assets/icons/icon-twitter.svg';
import IconScroll from '@public/assets/icons/icon-scroll-to-top.svg';

import Link from 'next/link';
import {
    FooterContainerStyled,
    FooterLeftStyled,
    FooterRightStyled,
    FooterLogoStyled,
    FooterTopStyled,
    FooterBottomStyled,
    FooterLinksStyled,
    FooterLinkStyled,
    FooterSocialLinksStyled,
    FooterSocialStyled,
    FooterTextWrapperStyled,
    FooterTextStyled,
    ButtonScrollToTopStyled,
} from './styles';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <FooterContainerStyled>
            <FooterLeftStyled>
                <FooterTopStyled>
                    <FooterLogoStyled>
                        <IconDept />
                    </FooterLogoStyled>
                    <FooterLinksStyled>
                        <Link href="/work" passHref>
                            <FooterLinkStyled>
                                Work
                            </FooterLinkStyled>
                        </Link>
                        <Link href="/service" passHref>
                            <FooterLinkStyled>
                                Service
                            </FooterLinkStyled>
                        </Link>
                        <Link href="/stories" passHref>
                            <FooterLinkStyled>
                                Stories
                            </FooterLinkStyled>
                        </Link>
                        <Link href="/about" passHref>
                            <FooterLinkStyled>
                                About
                            </FooterLinkStyled>
                        </Link>
                        <Link href="/careers" passHref>
                            <FooterLinkStyled>
                                Careers
                            </FooterLinkStyled>
                        </Link>
                        <Link href="/contact" passHref>
                            <FooterLinkStyled>
                                Contact
                            </FooterLinkStyled>
                        </Link>
                    </FooterLinksStyled>
                    <FooterSocialLinksStyled>
                        <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FooterSocialStyled>
                                <IconFb />
                            </FooterSocialStyled>
                        </a>
                        <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FooterSocialStyled>
                                <IconTwitter />
                            </FooterSocialStyled>
                        </a>
                        <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FooterSocialStyled>
                                <IconInstagram />
                            </FooterSocialStyled>
                        </a>
                    </FooterSocialLinksStyled>
                </FooterTopStyled>
                <FooterBottomStyled>
                    <FooterTextWrapperStyled>
                        <FooterTextStyled>
                            Chamber of Commerce: 63464101
                        </FooterTextStyled>
                        <FooterTextStyled>
                            VAT: NL 8552.47.502.B01
                        </FooterTextStyled>
                        <FooterTextStyled>
                            Terms and conditions
                        </FooterTextStyled>
                    </FooterTextWrapperStyled>
                    <FooterTextStyled>
                        © 2018 Dept Agency
                    </FooterTextStyled>
                </FooterBottomStyled>
            </FooterLeftStyled>
            <FooterRightStyled>
                <ButtonScrollToTopStyled onClick={scrollToTop}>
                    <IconScroll />
                    top
                </ButtonScrollToTopStyled>
            </FooterRightStyled>
        </FooterContainerStyled>
    );
}

export default Footer;
