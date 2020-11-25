import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import { allDrinks } from './data';
import './App.scss';

// THIS FILE IS ESSENTIALLY THE ENTRY POINT FOR YOUR APP. GENERALLY SPEAKING FOR SPAs(SINGLE PAGE APPS) OTHER
// COMPONENTS ARE IMPORTED AND USED IN THIS FILE. IN MORE COMPLEX APP, ROUTING AND LOGIC MAY BE DONE IN THIS FILE

function App() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='App'>
      {/* THIS IS HOW TO ADD YOUR COMPONENTS TO YOUR APP - ITS BEST TO LEAVE THE TOP INDEX ALONE UNLESS YOU ARE
      ADDING REDUX, OR A THIRD PARTY PACKAGE THAT NEEDS ACCCESS TO THE ROOT LEVEL OF YOUR APP */}

      <Header />
      <div className='topButton' onClick={() => backToTop()}>
        Back to Top
      </div>
      {/* AT THE TOP OF THE FILE, THE DRINKLIST IS BEING IMPORTED, BELOW THE DATA IS BEING PASSED TO THE SEARCH 
      COMPONENT AS A PROP CALLED ALL DRINKS */}
      <Search allDrinks={allDrinks} />
      <Footer />
    </div>
  );
}

export default App;
