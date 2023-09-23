import css from './ContactForm.module.css';
import React from 'react'

export const ContactForm = ({ stateEl, handleInputChange, handleSubmit}) => {
  return (
      <form className={css.form} onSubmit={handleSubmit} >
 <label>Name
  <input type="text"
                  value={stateEl.name}
                  onChange={handleInputChange}
                  name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required 
  />
          </label>
  <label >Number
   <input
    type="tel"
                  value={stateEl.number}
                  onChange={handleInputChange}
                  name="number"
                  
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  </label>
 <button>Add contact</button>
      </form>

  )
}
