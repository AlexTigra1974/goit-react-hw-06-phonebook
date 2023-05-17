import { useDispatch } from 'react-redux';
import { ButtonDel, Note } from './Contact.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch(id);
  return (
    <>
      <Note>
        {name}: <span> {number}</span>
      </Note>
      <ButtonDel onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDel>
    </>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
