import { Formik, Field } from 'formik';

import { ContactSchema } from './ContactSchema';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

import { Form, FormField, Button, ErrorMessage } from './ContactForm.styled';
// import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = values => {
  const dispatch = useDispatch();
  const newContact = {
    name: values.name,
    number: values,
    id: nanoid(),
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact(newContact));
          actions.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field type="tel" name="number" autoComplete="off" />
            <ErrorMessage name="number" component="span" />
          </FormField>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};
