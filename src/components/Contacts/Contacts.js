import PropTypes from 'prop-types';

import s from './Contacts.module.css';

function Contacts({ filterContacts, handleDeleteContact }) {
  return (
    <ul>
      {filterContacts.map(contact => (
        <li className={s.contacts_item} key={contact.id}>
          <p className={s.contacts_text}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={s.contacts_button}
            id={contact.id}
            type="button"
            onClick={handleDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  handleDeleteContact: PropTypes.func.isRequired,
};
export default Contacts;
