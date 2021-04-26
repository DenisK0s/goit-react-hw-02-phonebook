// модули
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

//компоненты
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';

class App extends Component {
  state = { contacts: [] };

  contactId = uuidv4();

  formSubmitHandler = contactData => {
    const newContact = { ...contactData, id: this.contactId };

    this.setState(prevState => {
      return { contacts: prevState.contacts.push(newContact) };
    });
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts contactsItems={contacts} />
      </Container>
    );
  }
}

export default App;
