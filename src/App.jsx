import React from 'react';
import Title from './components/Title/Title.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Form from './components/Form/Form.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {id: 0, firstName: 'Andrii', lastName: 'Ostapenko', tel: '555-777-999'},
        {id: 1, firstName: 'Fox', lastName: 'Mulder', tel: '555-123-321'},
        {id: 2, firstName: 'Dana', lastName: 'Scully', tel: '555-000-111'}
      ]
    }
  }

  getNewContact = (fname, lname, tel) => {
    this.setState({
      contacts: [...this.state.contacts, {id: Math.random(), firstName: fname, lastName: lname, tel: tel}]
    })
  }

  handlerCloseContact = (contactID) => {
    this.setState({
        contacts: [...this.state.contacts.filter(el => el.id !== +contactID)]
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Contacts contactsData={this.state.contacts} getCloseID={this.handlerCloseContact} />
        <Form getNewContact={this.getNewContact} />
      </div>
    )
  }
}

export default App;
