import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

import s from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  function handleAddContact({ name, number }) {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
  }

  const handleSubmit = e => {
    e.preventDefault();

    handleAddContact({ name, number });

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.form_label}>
        Name:
        <input
          className={s.form_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name Lastname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.form_label}>
        Number
        <input
          className={s.form_input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
