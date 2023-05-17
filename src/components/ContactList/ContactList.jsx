import { Contact } from 'components/Contact/Contact';
import { List, Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  let contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  if (filter.length) {
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <Contact name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};
