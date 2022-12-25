import React from 'react';
import './ContactItem.css';

export default function ContactItem(props) {
  let {id, firstName, lastName, tel} = props.contactData;

  let handlerCloseItem = (e) => {
    props.getCloseID(e.target.parentElement.id);
  }

  return (
    <li id={id} className='contacts_item'>
      <div className='contact-cell first-name_cell'>{firstName}</div>
      <div className='contact-cell last-name_cell'>{lastName}</div>
      <div className='contact-cell tel_cell'>{tel}</div>
      <button className='contacts-item_close-btn' onClick={handlerCloseItem}>&#215;</button>
    </li>
  );
}
