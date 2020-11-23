import React, { useState } from 'react';
import AutoComplete from '@material-ui/lab/AutoComplete';

// TO SHOW THE DIFFERENCE BETWEEN HOW THIS CLASS BASED COMPONENT WOULD BE WRITTEN IN MODERN REACT FUNCTIONAL
// COMPONENTS I HAVE REWRITTEN FUNCTIONAL AT THE TOP AND KEPT THE CLASS BASED FUNCTION AT THE BOTTOM COMMENTED OUT
// THIS COMPONENT WON'T FUNCTION AS MATERIAL UI BASE ISN'T INSTALLED

const SearchPanel = (props) => {
  const drinks = [
    { drinkName: 'Old Fashioned' },
    { drinkName: 'A-town pimpin' },
    { drinkName: 'Long Island Iced Tea' },
    { drinkName: 'Silver Cloud' },
    { drinkName: 'One of them f*ckin drinks' },
  ];

  // IF STATE MUST BE USED RATHER THAN A SCOPED VARIABLE THE COMMENTED OUT CODE BELOW WOULD BE CORRECT
  // const [drinks, setDrinks] = useState([
  //   { drinkName: 'Old Fashioned' },
  //   { drinkName: 'A-town pimpin' },
  //   { drinkName: 'Long Island Iced Tea' },
  //   { drinkName: 'Silver Cloud' },
  //   { drinkName: 'One of them f*ckin drinks' },
  // ]);

  return (
    <>
      <AutoComplete
        freesolo
        id='search'
        disableClearable
        renderInput={(params) => (
          <textField
            {...params}
            label='Search for a drink'
            margin='normal'
            variant='outlined'
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </>
  );
};

export default SearchPanel;

// // SAME FUNCTION IN A CLASS BASED COMPONENT

// import React, { Component, } from 'react';
// import AutoComplete from '@material-ui/lab/AutoComplete';

// class SearchPanel extends Component {
//   state = {
//     drinks: [
//       { drinkName: 'Old Fashioned' },
//       { drinkName: 'A-town pimpin' },
//       { drinkName: 'Long Island Iced Tea' },
//       { drinkName: 'Silver Cloud' },
//       { drinkName: 'One of them f*ckin drinks' },
//     ],
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <AutoComplete
//           freesolo
//           id='search'
//           disableClearable
//           renderInput={(params) => (
//             <textField
//               {...params}
//               label='Search for a drink'
//               margin='normal'
//               variant='outlined'
//               InputProps={{ ...params.InputProps, type: 'search' }}
//             />
//           )}
//         />
//       </React.Fragment>
//     );
//   }
// }

// export default SearchPanel;
