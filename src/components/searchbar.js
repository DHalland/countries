import React, { Component } from "react";

class SearchBar extends Component {
   handleChange(event) {
      event.target.select();
   }
   render() {
      return (
         <div className="form-group col-md-4">
            <label htmlFor="formGroupExampleInput"></label>
            <input
               type="text"
               onClick={this.handleChange}
               className="searchbox__input typeahead form-control"
               id="formGroupExampleInput"
               placeholder="Search For Country..."
            ></input>
         </div>
      );
   }
}

export default SearchBar;
