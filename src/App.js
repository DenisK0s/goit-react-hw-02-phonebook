// модули
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

//компоненты
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contactData => {
    const { contacts } = this.state;
    const isContactExist = contacts.find(
      ({ name }) => name === contactData.name,
    );

    if (!!isContactExist) {
      alert(`${isContactExist.name} is already in contacts`);
      return;
    }

    const newContact = { ...contactData, id: uuidv4() };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  FilterContacts = () => {
    const { contacts, filter } = this.state;

    const contactsRegisterCorretion = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactsRegisterCorretion),
    );
  };

  render() {
    const { filter } = this.state;

    const filtredContacts = this.FilterContacts();
    return (
      <Container>
        <h2 className="Title">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="Title">Contacts</h2>
        <Filter name={filter} onFilterChange={this.filterHandler} />
        <Contacts
          contactsItems={filtredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
