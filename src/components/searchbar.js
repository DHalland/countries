import React, { Component } from "react";

class SearchBar extends Component {
   constructor(props) {
      super(props);
      this.state = { name: "" };
   }

   render() {
      return (
         <div className="container-fluid">
            <div id="header" className="row">
               <div id="name" className="col-4">
                  <h3>{this.props.name}</h3>
               </div>
               <div className="form-group col-8">
                  <label id="search" htmlFor="formGroupExampleInput"></label>
                  <input
                     type="text"
                     onKeyDown={this.props.handleEnter}
                     className="searchbox__input typeahead form-control"
                     id="formGroupExampleInput"
                     placeholder="Search For Country..."
                  ></input>
               </div>
            </div>
         </div>
      );
   }
}

export default SearchBar;
