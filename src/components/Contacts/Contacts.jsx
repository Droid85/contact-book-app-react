import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './Contacts.css'

export default function Contacts(props) {
  return (
    <section className='contacts_section'>
      <h2 className='contacts_title'>Contacts list:</h2>
      <ul className='contacts_list'>
        {props.contactsData.map(contact => <
          ContactItem
            key={contact.id}
            contactData={contact}
            getCloseID={props.getCloseID}
          />
        )}
      </ul>
    </section>
  );
}
