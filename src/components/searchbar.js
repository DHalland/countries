import React, { Component } from "react";

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = { name: "" };
   }

   // handleClick = e1 => {
   //    this.setState({ name: e1.target.value });
   //    console.log(e1.target.value);
   // };

   render() {
      return (
         <div className="form-group col-md-4">
            <label htmlFor="formGroupExampleInput"></label>
            <input
               type="text"
               //onClick={this.handleClick}
               //onKeyDown={this.props.fetchCountryInfo}
               onKeyDown={this.props.handleEnter}
               className="searchbox__input typeahead form-control"
               id="formGroupExampleInput"
               placeholder="Search For Country..."
            ></input>
         </div>
      );
   }
}

export default SearchBar;
