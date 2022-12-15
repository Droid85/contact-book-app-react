import React from 'react';
import './Contacts.css'

class Contacts extends React.Component {
  handlerCloseItem = (e) => {
    this.props.getCloseID(e.target.parentElement.id)
  }

  render() {
    return (
      <section className='contacts_section'>
        <h2 className='contacts_title'>Contacts list:</h2>
        <ul className='contacts_list'>
          {this.props.contactsData.map(contact => <
            li key={contact.id}
              id={contact.id}
              className='contacts_item'>
              <div className='contact-cell first-name_cell'>{contact.firstName}</div>
              <div className='contact-cell last-name_cell'>{contact.lastName}</div>
              <div className='contact-cell tel_cell'>{contact.tel}</div>
              <button className='contacts-item_close-btn' onClick={this.handlerCloseItem}>&#215;</button>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default Contacts;
