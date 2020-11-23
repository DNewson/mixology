import React, { Component } from "react";
import AutoComplete from "@material-ui/lab/AutoComplete";

class SearchPanel extends Component {
  state = {
    drinks: [
      { drinkName: "Old Fashioned" },
      { drinkName: "A-town pimpin" },
      { drinkName: "Long Island Iced Tea" },
      { drinkName: "Silver Cloud" },
      { drinkName: "One of them f*ckin drinks" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <AutoComplete
          freesolo
          id="search"
          disableClearable
          renderInput={(params) => (
            <textField
              {...params}
              label="Search for a drink"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default SearchPanel;
