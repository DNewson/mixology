import React, { useState } from 'react';
import './styles.scss';

const SearchPanel = () => {
  const [drinkSearch, setDrinkSearch] = useState('');

  const drinks = [
    { name: 'Old Fashioned' },
    { name: 'A-town pimpin' },
    { name: 'Long Island Iced Tea' },
    { name: 'Silver Cloud' },
    { name: 'One of them f*ckin drinks' },
  ];

  const handleChange = (event) => {
    const target = event.target.value;
    setDrinkSearch(target);
  };

  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <h2>Search bar</h2>
        <input
          className='searchInput'
          placeholder='search a drink'
          value={drinkSearch}
          onChange={handleChange}></input>
        <ul>
          {drinks
            .filter((drink) => drink.name.toLowerCase().includes(drinkSearch))
            .map((drink) => (
              <li>{drink.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPanel;
