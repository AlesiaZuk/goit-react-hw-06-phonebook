import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './Contacts.module.css';

function Contacts() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  const handleDeleteContact = e => {
    const { id } = e.target;
    dispatch(deleteContact({ id }));
  };

  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <li className={s.contacts_item} key={id}>
          <p className={s.contacts_text}>
            {name}: {number}
          </p>
          <button
            className={s.contacts_button}
            id={id}
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

export default Contacts;
