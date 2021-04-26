//модули
import PropTypes from 'prop-types';

//стили
import styles from './Input.module.css';

const Input = ({ inputLabel, type, value, onInputChange }) => {
  return (
    <label htmlFor="" className={styles.InputLabel}>
      {inputLabel}
      <input
        className={styles.Input}
        type={type}
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onInputChange}
      />
    </label>
  );
};

Input.propTypes = {
  inputLabel: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Input;
