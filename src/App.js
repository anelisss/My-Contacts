import React, { useState } from 'react';
import './App.css';
import PhoneForm from './PhoneForm'
import PhoneList from './PhoneList'

function App() {
  const [phoneNumbers, setPhoneNumbers, deleteContact] = useState([{
    firstName: "",
    lastName: "",
    phone: "",
  }])

  const handleSubmit = (newNumber) => {
      setPhoneNumbers([...phoneNumbers, newNumber]);
  }

  return (
    <div>
      <h2>My Contacts</h2>
      <PhoneForm onSubmit={handleSubmit}/>
      <PhoneList phoneNumbers={phoneNumbers} />
    </div>
  );
}

export default App;