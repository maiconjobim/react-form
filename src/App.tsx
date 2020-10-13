import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ContactForm from './Pages/ContactForm/index'

function App() {
  return (
    <Provider store = {store}> 
      <ContactForm/>
    </Provider>
  );
}

export default App;
