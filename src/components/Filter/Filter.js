import PropTypes from 'prop-types';

import s from './Filter.module.css';

function Filter({ filter, handleChange }) {
  return (
    <label className={s.filter_label}>
      Find contacts by name:
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
