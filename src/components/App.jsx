import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

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

    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(contacts.filter(contacts => contacts.id !== contactId));
  };

  const onFilter = text => {
    setFilter(text);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter onFilter={onFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={deleteContact}
      />
    </div>
  );
};
