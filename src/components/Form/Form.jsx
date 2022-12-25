import React, { useState } from 'react';
import './Form.css';

export default function Contacts(props) {
	let [buttonContent, setButtonContent] = useState('+');
	let [contact, setContact] = useState({
		firstName: '',
		lastName: '',
		tel: null
	});

	let handleAddContackSwitcher = () => {
		let addContackBlock = document.querySelector('#addContact');
		addContackBlock.classList.toggle('add-contact_block-active');
		setButtonContent(addContackBlock.classList.contains('add-contact_block-active') ? '-' : '+');
	}

	let handlerSetContact = (e) => {
		const { value, name } = e.target;

		setContact({
			...contact,
			[name]: value,
		});
	}

	let handlerCleaner = () => {
		let contactInput = document.querySelectorAll('.add-contact_input');

		contactInput.forEach(input => input.value = '');

		setContact({
			firstName: '',
			lastName: '',
			tel: null
		});
	}

	let hendlerAddContact = () => {
		if (contact.firstName && contact.lastName && contact.tel) {
			props.getNewContact(contact);

			handlerCleaner();
			handleAddContackSwitcher();
		}
	}

	let handlerCancelContact = () => {
		handlerCleaner();
		handleAddContackSwitcher();
	}

  return (
    <section className='add-contact_section'>
		<button id='addContactBtn' className='add-contact_btn' onClick={handleAddContackSwitcher}>{buttonContent}</button>
		<div id='addContact' className='add-contact_block'>
			<input id='fname-input' type='text' name='firstName' placeholder='First name' className='add-contact_input' onChange={handlerSetContact} />
			<input id='lname-input' type='text' name='lastName' placeholder='Last name' className='add-contact_input' onChange={handlerSetContact} />
			<input id='tel-input' type='text' name='tel' placeholder='Tel' className='add-contact_input' onChange={handlerSetContact} />
			<button className='form-btn confirm-btn' onClick={hendlerAddContact}>Add contact</button>
			<button className='form-btn cencel-btn' onClick={handlerCancelContact}>Cancel</button>
		</div>
	</section>
  );
}
