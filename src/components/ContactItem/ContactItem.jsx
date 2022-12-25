import React from 'react';
import './ContactItem.css';

class ContactItem extends React.Component {
  handlerCloseItem = (e) => {
    this.props.getCloseID(e.target.parentElement.id);
  }

  render() {
    let {id, firstName, lastName, tel} = this.props.contactData;

    return (
      <li id={id} className='contacts_item'>
        <div className='contact-cell first-name_cell'>{firstName}</div>
        <div className='contact-cell last-name_cell'>{lastName}</div>
        <div className='contact-cell tel_cell'>{tel}</div>
        <button className='contacts-item_close-btn' onClick={this.handlerCloseItem}>&#215;</button>
      </li>
    );
  }
}

export default ContactItem;
