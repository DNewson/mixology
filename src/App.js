import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.scss';

// THIS FILE IS ESSENTIALLY THE ENTRY POINT FOR YOUR APP. GENERALLY SPEAKING FOR SPAs(SINGLE PAGE APPS) OTHER
// COMPONENTS ARE IMPORTED AND USED IN THIS FILE. IN MORE COMPLEX APP, ROUTING AND LOGIC MAY BE DONE IN THIS FILE

function App() {
  return (
    <div className='App'>
      {/* THIS IS HOW TO ADD YOUR COMPONENTS TO YOUR APP - ITS BEST TO LEAVE THE TOP INDEX ALONE UNLESS YOU ARE
      ADDING REDUX, OR A THIRD PARTY PACKAGE THAT NEEDS ACCCESS TO THE ROOT LEVEL OF YOUR APP */}

      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
