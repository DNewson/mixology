import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPanel from './components/searchPanel';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchPanel />
      <Footer />
    </div>
  );
}

export default App;
