import css from './ContactList.module.css';

const ContactList = ({ filter, contacts }) => {
  return (
    <>
      <ul className={css.list}>
        {contacts
          .filter(element =>
            element.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
