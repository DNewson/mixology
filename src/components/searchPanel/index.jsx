import React, { useState } from 'react';
// IN SASS STYLES ARE IMPORTED AS PER BELOW
import './styles.scss';

const SearchPanel = () => {
  // THIS IS HOW YOU DECLARE STATE IN A FUNCTIONAL COMPONENT USING HOOKS, IN THIS CASE DRINK SEARCH IS INITIALLY
  // SET AS '', BUT WILL BE UPDATED WITH EVERY CHARACTER ENTERED INTO THE SEARCH FIELD
  const [drinkSearch, setDrinkSearch] = useState('');

  // THIS IS THE DRINK DATA, ONCE THE DATASET GETS LARGER, IT CAN BE MOVED TO A SEPARATE FILE, OR ONLINE DB AND CALLED
  // AS NEEDED TO REDUCE THE FILE SIZE AND INITIAL LOAD TIME
  const drinks = [
    { name: 'Old Fashioned' },
    { name: 'A-town pimpin' },
    { name: 'Long Island Iced Tea' },
    { name: 'Silver Cloud' },
    { name: 'One of them f*ckin drinks' },
  ];

  // THIS HANDLES THE CHANGES IN INPUT - IT TAKES THE TARGET AND SETS THE drinkSearch STATE WHICH IS USED TO FILETER
  // THE ARRAY, THIS STATE DATA CAN ALSO BE USED FOR OTHER PURPOSES
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
          {/* THIS IS HOW THE DRINKS ARE DISPLAYED -- 
          FIRST THE DRINKS ARRAY IS FILTERED BASED ON THE CONTROLLED INPUT STATE VALUE USING 'INCLUDES', THE RESULTING
          ARRAY IS THEN MAPPED OVER AND THE DRINK NAME IS DISPLAYED IN AN LI. THE DRINKS CAN BE SHOWN IN ANY OTHER
          WAY, SUCH AS INSIDE OF A LINK, OR A COMPONENT, ETC.*/}
          {drinks
            .filter((drink) => drink.name.toLowerCase().includes(drinkSearch))
            .map((drink) => (
              <li
                onClick={() =>
                  alert(
                    'You can treat these like a button to execute a function, or navigate to a new page, or open a modal, etc'
                  )
                }>
                {drink.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPanel;
