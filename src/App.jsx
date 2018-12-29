import React, { Component } from 'react';
import './App.scss';

import { ContactList } from './components/contact-list/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
