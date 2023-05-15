import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ name, number }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  if (filter.length) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  ) {
    alert(`${name} is already in contacts.`);
  }

  if (contacts.find(contact => contact.number === number)) {
    alert(`${number} is already in contacts.`);
  }

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact
            contact={contact}
            // name={contact.name}
            // number={contact.number}
            // id={contact.id}
          />
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
};
