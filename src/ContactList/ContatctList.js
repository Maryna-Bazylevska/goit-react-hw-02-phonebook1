import css from "./ContactList.module.css";
import PropTypes from "prop-types";
const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          <p className={css.text}>
            {name}: {number}
          </p>
          <button className={css.button} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
