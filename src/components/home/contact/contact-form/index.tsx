import React from 'react';
import Button from '@components/common/button';
import InputField from '@components/common/input-field';

import { Form, Field } from 'react-final-form';

import { FormFieldWrapperStyled, ContactFormWrapperStyled } from './styles';

interface ContactFormProps {
    showConfirmationMessage: () => void
}

const ContactForm = ({ showConfirmationMessage }: ContactFormProps) => (
    <ContactFormWrapperStyled>
        <Form
            validate={(values) => ContactForm.validate(values)}
            onSubmit={(_, form) => ContactForm.onSubmit(form, showConfirmationMessage)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <FormFieldWrapperStyled>
                        <Field name="name">
                            {({ input, meta }) => (
                                <InputField
                                    label="name"
                                    id="name"
                                    type="text"
                                    error={meta.touched && meta.error}
                                    {...input}
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <InputField
                                    label="email"
                                    id="email"
                                    type="text"
                                    error={meta.touched && meta.error}
                                    {...input}
                                />
                            )}
                        </Field>
                        <Field name="message">
                            {({ input, meta }) => (
                                <InputField
                                    label="message"
                                    id="message"
                                    type="textarea"
                                    error={meta.touched && meta.error}
                                    {...input}
                                />
                            )}
                        </Field>
                    </FormFieldWrapperStyled>
                    <Button type="submit" color="#1A18F7">
                        SEND
                    </Button>
                </form>
            )}
        />
    </ContactFormWrapperStyled>
);

ContactForm.validate = (values: Record<string, string>) => {
    const errors:Record<string, string> = {};

    if (!values.email || !values.email.trim()) { errors.email = 'Name is required.'; }

    if (!values.name || !values.name.trim()) { errors.name = 'Email is required.'; }

    if (!values.message || !values.message.trim()) { errors.message = 'Message is required.'; }

    return errors;
};

ContactForm.onSubmit = (form: Record<string, any>, showConfirmationMessage: any) => {
    // Submit message...

    form.restart();
    showConfirmationMessage();
};

export default ContactForm;
