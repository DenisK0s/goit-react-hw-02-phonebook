//модули
import PropTypes from 'prop-types';

//стили
import styles from './Contacts.module.css';

const Contacts = ({ contactsItems }) => {
  console.log(contactsItems);
  return (
    <div className={styles.Contacts}>
      <h2 className="Title">Contacts</h2>
      <ul className="ContactsList">
        {contactsItems.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsItems: PropTypes.array,
};

export default Contacts;
