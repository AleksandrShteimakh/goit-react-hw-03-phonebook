
import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterContacts = filter => {
    this.setState({ filter });
  };

  addContact = contact => {
    const { name } = contact;
    const lowerCaseName = name.toLowerCase();
    const isNameUnique = !this.state.contacts.some(
      existingContact => existingContact.name.toLowerCase() === lowerCaseName
    );

    if (isNameUnique) {
      const id = nanoid();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id }],
      }));
      this.setState({ name: '', number: '' });
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
// ---