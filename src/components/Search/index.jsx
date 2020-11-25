import React, { useState } from 'react';
import reset from './../../assets/img/reset.svg';
// IN SASS STYLES ARE IMPORTED AS PER BELOW
import './styles.scss';

// NOTICE BELOW THE PROPS ARE BEING PASSED IN. IT IS POSSIBLE TO DESTRUCTURE THE PROPS INLINE TO GET ACCESS TO
// SPECIFIC PROP, HOWEVER FOR THE SAKE OF LEARNING, I HAVE LEFT IT AS IS AND PULLED THE SPECIFIC PROP MANUALLY
// AND ASSIGNED IT TO A VARIABLE
const Search = (props) => {
  const drinkList = props.allDrinks;

  // THIS IS HOW YOU DECLARE STATE IN A FUNCTIONAL COMPONENT USING HOOKS, IN THIS CASE DRINK SEARCH IS INITIALLY
  // SET AS '', BUT WILL BE UPDATED WITH EVERY CHARACTER ENTERED INTO THE SEARCH FIELD
  const [drinkSearch, setDrinkSearch] = useState('');

  // THIS IS THE DRINK DATA, ONCE THE DATASET GETS LARGER, IT CAN BE MOVED TO A SEPARATE FILE, OR ONLINE DB AND CALLED
  // AS NEEDED TO REDUCE THE FILE SIZE AND INITIAL LOAD TIME
  // const drinks = [
  //   { name: 'Old Fashioned' },
  //   { name: 'A-town pimpin' },
  //   { name: 'Long Island Iced Tea' },
  //   { name: 'Silver Cloud' },
  //   { name: 'One of them f*ckin drinks' },
  // ];

  // THIS HANDLES THE CHANGES IN INPUT - IT TAKES THE TARGET AND SETS THE drinkSearch STATE WHICH IS USED TO FILETER
  // THE ARRAY, THIS STATE DATA CAN ALSO BE USED FOR OTHER PURPOSES
  const handleChange = (event) => {
    const target = event.target.value;
    setDrinkSearch(target);
  };

  const resetSearch = () => {
    // IF THE drinkSearch STATE IS AN EMPTY STRING, ALERT THE USER
    if (drinkSearch === '') {
      alert('Search is already empty');
    } else {
      // IF THE drinkSearch STATE HOLDS A VALUE, SET THE drinkSearch STATE BACK TO AN EMPTY STRING
      setDrinkSearch('');
    }
  };

  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <h2>Search Bar</h2>
        <div className='inputBox'>
          <input
            className='searchInput'
            maxlength='16'
            placeholder='search a drink'
            value={drinkSearch}
            onChange={handleChange}></input>
          {/* RESET BUTTON -- ON CLICK RUNS THE resetSearch FUNCTION */}
          <div onClick={() => resetSearch()}>
            <img className='reset' src={reset} alt='reset button' />
          </div>
        </div>

        <ul>
          {/* THIS IS HOW THE DRINKS ARE DISPLAYED --
          FIRST THE DRINKS ARRAY IS FILTERED BASED ON THE CONTROLLED INPUT STATE VALUE USING 'INCLUDES', THE RESULTING
          ARRAY IS THEN MAPPED OVER AND THE DRINK NAME IS DISPLAYED IN AN LI. THE DRINKS CAN BE SHOWN IN ANY OTHER
          WAY, SUCH AS INSIDE OF A LINK, OR A COMPONENT, ETC.*/}
          {drinkList
            .filter((drink) =>
              drink.name.toLowerCase().includes(drinkSearch.toLowerCase())
            )
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

export default Search;
