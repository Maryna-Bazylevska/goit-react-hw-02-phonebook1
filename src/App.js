import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./Form";
import ContatctList from "./ContactList";
import Filter from "./Filter";
import Notification from "./Notification";
const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
class App extends Component {
  state = {
    contacts: [],
    filter: " ",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  addContact = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.filter((item) => item.name === data.name).length > 0
      ? alert(`${contact.name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = filterContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        {contacts.length < 1 ? (
          <Notification text="Contact list is empty" />
        ) : (
          <div>
            <Filter value={filter} onChange={this.changeFilter} />

            <ContatctList
              items={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
