import React, { useState } from 'react';
import Title from './components/Title/Title.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Form from './components/Form/Form.jsx';
import './App.css';

export default function App() {
  let [contacts, setContacts] = useState([
    {id: 0, firstName: 'Andrii', lastName: 'Ostapenko', tel: '555-777-999'},
    {id: 1, firstName: 'Fox', lastName: 'Mulder', tel: '555-123-321'},
    {id: 2, firstName: 'Dana', lastName: 'Scully', tel: '555-000-111'},
  ]);

  let getNewContact = (contactDataObj) => {
    setContacts(
      [...contacts, {id: Math.random(), ...contactDataObj}]
    )
  }

  let handlerCloseContact = (contactID) => {
    setContacts(
        [...contacts.filter(el => el.id !== +contactID)]
    )
  }

  return (
    <div className="App">
      <Title />
      <Contacts contactsData={contacts} getCloseID={handlerCloseContact} />
      <Form getNewContact={getNewContact} />
    </div>
  );
}
