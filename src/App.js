// Using the Houses API, or any open API of your choice you can find online, create a single page that allows for all 4 CRUD operations to be performed on a resource from the API.
// Create a React component (or more, if needed) to represent the resource.
// Make all forms and other necessary UI pieces their own components as reasonable.






import React, { useState, useEffect } from 'react'; //importing all my files to the app.js
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css'; 


function App() { //our first function for our app and contats
  let [contacts, setContacts] = useState([]);
  let [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  let fetchContacts = async () => { //function for fetching our contacts from the mock API
    try {
      const response = await axios.get('https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const addContact = async (contact) => { // adding contacts to the API
    try {
      await axios.post('https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts', contact);
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  let updateContact = async (updatedContact) => { //function for updating contacts
    try {
      await axios.put(`https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts/${updatedContact.id}`, updatedContact);
      fetchContacts();
      setSelectedContact(null);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  let deleteContact = async (id) => { //function for deleting contacts from the API
    try {
      await axios.delete(`https://65b8594446324d531d561e91.mockapi.io/PromineoTechAPI/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return ( //finally returning everything and making our app run
    <div className="App">
      <h1>Employee Contact List App</h1>
      <ContactList
        contacts={contacts}
        onEdit={(contact) => setSelectedContact(contact)}
        onDelete={deleteContact}
      />
      <ContactForm
        onSubmit={selectedContact ? updateContact : addContact}
        initialData={selectedContact}
      />
    </div>
  );
}

export default App;
