import React from 'react'; // our basic form and buttons 

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} ({contact.email}){' '}
            <button onClick={() => onEdit(contact)}>Edit</button>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
