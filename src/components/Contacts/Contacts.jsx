import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './Contacts.css'

class Contacts extends React.Component {
  render() {
    return (
      <section className='contacts_section'>
        <h2 className='contacts_title'>Contacts list:</h2>
        <ul className='contacts_list'>
          {this.props.contactsData.map(contact => <ContactItem key={contact.id} contactData={contact} getCloseID={this.props.getCloseID} />)}
        </ul>
      </section>
    )
  }
}

export default Contacts;
