import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Form, FormField, Button, ErrorMessage } from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(13, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onSubmit({
            ...values,
            id: nanoid(),
          });
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
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
