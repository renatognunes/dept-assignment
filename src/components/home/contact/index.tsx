import React, { useEffect, useState } from 'react';

import ContactForm from './contact-form';
import {
    ContactContainerStyled,
    ContactTextWrapperStyled,
    ContactTextStyled,
    ContactSuccessMessageStyled,
} from './styles';

const Contact = () => {
    const { showMessage, setShowMessage } = Contact.useComponent();

    return (
        <>
            <ContactSuccessMessageStyled $show={showMessage}>
                Your message has been sent!
            </ContactSuccessMessageStyled>
            <ContactContainerStyled>
                <ContactTextWrapperStyled>
                    <ContactTextStyled>
                        Question?
                        {' '}
                        <br />
                        We are here to help!
                    </ContactTextStyled>
                </ContactTextWrapperStyled>
                <ContactForm
                    showConfirmationMessage={() => setShowMessage(true)}
                />
            </ContactContainerStyled>
        </>
    );
};

Contact.useComponent = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (showMessage) {
                setShowMessage(false);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [showMessage]);

    return {
        showMessage,
        setShowMessage,
    };
};

export default Contact;
