import { ButtonDel, Note } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <Note>
        {name}: <span> {number}</span>
      </Note>
      <ButtonDel onClick={() => onDelete(id)}>Delete</ButtonDel>
    </>
  );
};
Contact.ropTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
