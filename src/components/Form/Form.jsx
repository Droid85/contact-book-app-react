import React from 'react';
import './Form.css'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			buttonContent: '+',
			firstName: '',
			lastName: '',
			tel: null
		}
	}

	handleAddContackSwitcher = () => {
		let addContackBlock = document.querySelector('#addContact');
		addContackBlock.classList.toggle('add-contact_block-active');
		this.setState({
			buttonContent: addContackBlock.classList.contains('add-contact_block-active') ? '-' : '+'
		})
	}

	handlerSetContact = (e) => {
		switch(e.target.id) {
			case 'fname-input':
				this.setState({
					firstName: e.target.value
				})
				break
			case 'lname-input':
				this.setState({
					lastName: e.target.value
				})
				break
			case 'tel-input':
				this.setState({
					tel: +e.target.value
				})
				break
			default:
				this.setState({
					firstName: '',
					lastName: '',
					tel: null
				})
		}
	}

	handlerCleaner = () => {
		let contactInput = document.querySelectorAll('.add-contact_input');

		contactInput.forEach(input => input.value = '');

		this.setState({
				firstName: '',
				lastName: '',
				tel: null
			})

	}

	hendlerAddContact = () => {
		if (this.state.firstName && this.state.lastName && this.state.tel) {
			this.props.getNewContact(this.state.firstName, this.state.lastName, this.state.tel);

			this.handlerCleaner();
			this.handleAddContackSwitcher();
		}
	}

	handlerCancelContact = () => {
		this.handlerCleaner();
		this.handleAddContackSwitcher();
	}

	render() {
		return (
			<section className='add-contact_section'>
				<button id='addContactBtn' className='add-contact_btn' onClick={this.handleAddContackSwitcher}>{this.state.buttonContent}</button>
				<div id='addContact' className='add-contact_block'>
					<input id='fname-input' type='text' placeholder='First name' className='add-contact_input' onChange={this.handlerSetContact} />
					<input id='lname-input' type='text' placeholder='Last name' className='add-contact_input' onChange={this.handlerSetContact} />
					<input id='tel-input' type='text' placeholder='Tel' className='add-contact_input' onChange={this.handlerSetContact} />
					<button className='form-btn confirm-btn' onClick={this.hendlerAddContact}>Add contact</button>
					<button className='form-btn cencel-btn' onClick={this.handlerCancelContact}>Cancel</button>
				</div>
			</section>
		)
	}
}

export default Form;
