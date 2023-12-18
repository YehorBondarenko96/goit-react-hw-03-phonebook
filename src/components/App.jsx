import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from './Styles.module.css';
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
  const contactsLS = localStorage.getItem('contacts');

  if(contactsLS){
    const contacts = JSON.parse(contactsLS);
    this.setState((state) => ({
      contacts: contacts
    }));
  }
};
  

  updateStateForAdd = (evt) => {
    evt.preventDefault();
    const newName = evt.currentTarget.elements.name.value;
    const newNumb = evt.currentTarget.elements.number.value;
    const contactsInState = this.state.contacts;
    if(!contactsInState.some(contact => contact.name.toLowerCase() === newName.toLowerCase())){
      this.setState((state) => ({
          contacts: [...state.contacts, {id: nanoid(), name: newName, number: newNumb}]
        }))
    } else{
      alert(`${newName} is already in contacts.`)
    }
    evt.currentTarget.reset();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };
  

  updateStateForDelete = (evt) => {
    const idContact = evt.currentTarget.id;
    const newContactsForState = this.state.contacts.filter((contact) => (contact.id !== idContact));
    this.setState((state) => ({
      contacts: [...newContactsForState]
    }))
  };

  updateStateForFilter = (evt) => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    this.setState((state) => ({
      filter: filterValue
    }))
  };

  render(){

    const filterWithState = this.state.filterWithState;

    let contacts = this.state.contacts;
    const filter = this.state.filter;
    if(filter.length > 0){
      contacts = contacts.filter(
          (contact) => (contact.name.toLowerCase().includes(filter.toLowerCase()))
          )
    }

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#010101',
        margin: 20
      }}
    >
      <div>
  <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm 
  updateStateForAdd={this.updateStateForAdd}
  />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter
  filterWithState={filterWithState}
  updateStateForFilter={this.updateStateForFilter}
  />
  <ContactList 
  contacts={contacts}
  updateStateForDelete={this.updateStateForDelete}
  />
</div>
    </div>
  )}
};