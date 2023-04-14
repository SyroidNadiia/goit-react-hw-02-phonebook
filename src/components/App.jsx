import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleAddContact = formData => {
    const { name, contacts, number } = formData;
    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
    console.log(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div className={css.section}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm
            handleInputChange={this.onChangeInput}
            onSubmit={this.handleAddContact}
          ></ContactForm>
          <h2 className={css.title}>Contacts</h2>
          <Filter
            filter={filter}
            handleInputChange={this.onChangeInput}
          ></Filter>
          <ContactList contacts={contacts} filter={filter}></ContactList>
        </div>
      </>
    );
  }
}

export default App;
