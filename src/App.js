import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./Form";
import ContatctList from "./ContactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermion Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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

    this.state.contacts.filter((item) => item.name === data.name)
      ? alert(`${contact.name} is alredy in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filterForContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContatctList
          contacts={filterForContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
