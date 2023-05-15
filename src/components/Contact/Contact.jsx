import { useDispatch } from 'react-redux';
import { ButtonDel, Note } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  // contacts.filter(contacts => contacts.id !== contactId))

  return (
    <>
      <Note>
        {contact.name}: <span> {contact.number}</span>
      </Note>
      <ButtonDel onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </ButtonDel>
    </>
  );
};
Contact.ropTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
