import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./searchbar";

class Country extends Component {
   searchHandler() {
      this.setState({
         country: this.props.info,
         name: ""
      });
   }

   render() {
      let api_key = process.env.REACT_APP_API_KEY;
      let country = this.props.info;
      let name = country.name,
         alpha2Code = country.alpha2Code,
         numericCode = country.numericCode,
         population = country.population,
         capital = country.capital,
         region = country.region,
         subregion = country.subregion,
         timezones = country.timezones,
         currencies = country.currencies,
         languages = country.languages,
         borders = country.borders;

      return (
         <div className="container-fluid">
            <div className="row" id="info">
               <div className="col-12">
                  <p className="bubble">Capital: {capital}</p>
                  <br></br>
                  <p className="bubble">Population: {population}</p>
                  <br></br>
                  <p className="bubble">Country Code: {alpha2Code}</p>
                  <br></br>
                  <p className="bubble">Region: {region}</p>
                  <br></br>
                  <p className="bubble">SubRegion: {subregion}</p>
                  <br></br>
                  <p className="bubble">Numeric Code: {numericCode}</p>
                  <br></br>

                  <div className="button">
                     <a
                        href="#moreInfo"
                        className="btn btn-dark btn-xl page-scroll"
                     >
                        More Info
                     </a>
                  </div>
               </div>
            </div>
            <div
               style={{ backgroundImage: "url(" + this.props.flag + ")" }}
               className="row"
               id="flag"
            >
               <div className="col-12"></div>
            </div>
            <div
               style={{ backgroundImage: "url(" + this.props.background + ")" }}
               className="row"
               id="moreInfo"
            >
               <div className="col-12">
                  <p className="left">Timezones: {timezones}</p>
                  <br></br>
                  <p className="left">Primary Currency: {currencies}</p>
                  <br></br>
                  <p className="left">Primary Language: {languages}</p>
                  <br></br>
                  <p className="left">Borders: {borders}</p>
               </div>
            </div>
         </div>
         // <div>
         //    <center>
         //       <h1></h1>
         //    </center>
         //    <div className="card">
         //       <div className="card-body">
         //          <h3 className="card-title">{name}</h3>
         //          <h6 className="card-subtitle mb-2 text-muted">
         //             Population: {population}
         //          </h6>
         //          <h6 className="card-subtitle mb-2 text-muted">
         //             Capital: {capital}
         //          </h6>
         //       </div>
         //    </div>
         // </div>
      );
   }
}

export default Country;
