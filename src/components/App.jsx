import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {
state = {
  contacts: [],
  name: '',
  number:''
  }
  
  handleInputChange = (e) => {
    this.setState({
     [ e.target.name]:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
 }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm stateEl={this.state} handleSubmit={this.handleSubmit} handleInputChange={ this.handleInputChange} />
         <h2>Contacts</h2>
    </>
  )
 }
};
