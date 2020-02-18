import React, { Component } from "react";

class SearchBar extends Component {
   handleChange(event) {
      event.target.select();
   }
   render() {
      return (
         <div class="form-group">
            <label for="formGroupExampleInput"></label>
            <input
               type="text"
               onClick={this.handleChange}
               class="form-control"
               id="formGroupExampleInput"
               placeholder="Search For Country..."
            ></input>
         </div>
      );
   }
}

export default SearchBar;
