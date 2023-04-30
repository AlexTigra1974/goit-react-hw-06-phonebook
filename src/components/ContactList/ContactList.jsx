import { Contact } from 'components/Contact/Contact';
import { List, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete, filter }) => {
  if (filter.length) {
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
