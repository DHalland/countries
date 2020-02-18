import React, { Component } from "react";
import ReactDOM from "react-dom";

class Country extends Component {
   render() {
      let country = this.props.info;
      console.log(country);

      let name = country.name,
         population = country.population,
         capital = country.capital;

      return (
         <div>
            <center>
               <h1></h1>
            </center>
            <div className="card">
               <div className="card-body">
                  <h3 className="card-title">{name}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">
                     Population: {population}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                     Capital: {capital}
                  </h6>
               </div>
            </div>
         </div>
      );
   }
}

export default Country;
