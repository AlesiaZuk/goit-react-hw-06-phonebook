import { useState, useEffect } from 'react';
import { v4 as keyGenerate } from 'uuid';

import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

const sectionClass = ['section'];

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Alesia Zuk', number: '459-12-56' },
    { id: 'id-2', name: 'Ilona Myroniuk ', number: '443-89-12' },
    { id: 'id-3', name: 'Vladislav Apelhants', number: '645-17-79' },
    { id: 'id-4', name: 'Artiom Bilodid', number: '227-91-26' },
    { id: 'id-5', name: 'Aleksandr Korniiets', number: '645-17-79' },
    { id: 'id-6', name: 'Roman Ilienko ', number: '443-89-12' },
    { id: 'id-7', name: 'Tatyana Tuluk ', number: '443-89-12' },
  ]);

  const [filter, setFilter] = useState('');

  function handleChange(e) {
    setFilter(e.target.value);
  }

  function handleAddContact({ name, number }) {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const contactsOld = contacts;
      const contactNew = {
        id: keyGenerate(),
        name: name,
        number: number,
      };
      setContacts([...contactsOld, contactNew]);
    }
  }

  function handleDeleteContact(e) {
    const elementForRemove = contacts.find(
      contact => contact.id === e.target.id,
    );
    const elementForRemoveIndex = contacts.indexOf(elementForRemove);
    contacts.splice(elementForRemoveIndex, 1);
    setContacts([...contacts]);
  }

  function filterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <section className={sectionClass}>
      <Section title="Phonebook">
        <Form handleAddContact={handleAddContact}></Form>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} handleChange={handleChange}></Filter>
        <Contacts
          filterContacts={filterContacts()}
          handleDeleteContact={handleDeleteContact}
        ></Contacts>
      </Section>
    </section>
  );
}

export default App;
