import { Formik, Field } from 'formik';
import { ContactSchema } from './ContactSchema';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

import { Form, FormField, Button, ErrorMessage } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  //  setContacts([...contacts, newContact]);
  const handleSubmit = ({ name, number }, action) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    }
    dispatch(addContact(newContact));
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
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
