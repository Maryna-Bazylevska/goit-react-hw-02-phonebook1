import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";
import Form from "./Form";
import ContatctList from "./ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
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

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  // updateContatcts = (contactId) => {
  //   this.setState(({ contacts }) => ({
  //     todos: contacts.map((contact) =>
  //       contact.id === contactId
  //         ? { ...contact, completed: !contact.completed }
  //         : contact
  //     ),
  //   }));
  // };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContatctList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
