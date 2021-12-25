import css from "./ContactList.module.css";

function ContactItem({ name, number, children }) {
  return (
    <li className={css.item}>
      {name}: {number}
      {children}
    </li>
  );
}

export default ContactItem;
