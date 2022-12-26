import React, { useState } from 'react';
import './Form.css';

export default function Contacts(props) {
	let [buttonContent, setButtonContent] = useState('+');
	let [contact, setContact] = useState({
		firstName: '',
		lastName: '',
		tel: ''
	});

	let handleAddContackSwitcher = (e) => {
		e.target.nextElementSibling.classList.toggle('add-contact_block-active');
		setButtonContent(e.target.classList.contains('add-contact_block-active') ? '-' : '+');
		handlerCleaner();
	}

	let handlerHideForm = (form) => {
		form.classList.remove('add-contact_block-active');
		setButtonContent('+');
	}

	let handlerSetContact = (e) => {
		const { value, name } = e.target;

		setContact({
			...contact,
			[name]: value,
		});
	}

	let handlerCleaner = () => {
		setContact({
			firstName: '',
			lastName: '',
			tel: ''
		});
	}

	let hendlerAddContact = (e) => {
		if (contact.firstName && contact.lastName && contact.tel) {
			props.getNewContact(contact);

			handlerCleaner();
			handlerHideForm(e.target.parentElement);
		}
	}

	let handlerCancelContact = (e) => {
		handlerCleaner();
		handlerHideForm(e.target.parentElement);
	}

  return (
    <section className='add-contact_section'>
		<button id='addContactBtn' className='add-contact_btn' onClick={handleAddContackSwitcher}>{buttonContent}</button>
		<div id='addContact' className='add-contact_block'>
			<input id='fname-input' type='text' value={contact.firstName} name='firstName' placeholder='First name' className='add-contact_input' onChange={handlerSetContact} />
			<input id='lname-input' type='text' value={contact.lastName} name='lastName' placeholder='Last name' className='add-contact_input' onChange={handlerSetContact} />
			<input id='tel-input' type='text' value={contact.tel} name='tel' placeholder='Tel' className='add-contact_input' onChange={handlerSetContact} />
			<button className='form-btn confirm-btn' onClick={hendlerAddContact}>Add contact</button>
			<button className='form-btn cencel-btn' onClick={handlerCancelContact}>Cancel</button>
		</div>
	</section>
  );
}
