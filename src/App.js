import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPanel from './components/searchPanel';

import './App.scss';

function App() {
  return (
    <div className='App'>
      {/* THIS IS HOW TO ADD YOUR COMPONENTS TO YOUR APP - ITS BEST TO LEAVE THE TOP INDEX ALONE UNLESS YOU ARE
      ADDING REDUX, OR A THIRD PARTY PACKAGE THAT NEEDS ACCCESS TO THE ROOT LEVEL OF YOUR APP */}
      <Header />
      <SearchPanel />
      <Footer />
    </div>
  );
}

export default App;
