import React, { Component } from "react";
import "./App.css";
import Country from "./components/country";
import SearchBar from "./components/searchbar";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "colombia"
      };
   }

   render() {
      return (
         <div>
            <SearchBar />
            <Country info={this.state} />
         </div>
      );
   }

   fetchInfo(url) {
      fetch(url)
         .then(result => result.json())
         .then(json => {
            this.setState({
               name: json[0].name,
               capital: json[0].capital,
               population: json[0].population
            });
         });
   }

   fetchCountryInfo(name) {
      let url = "https://restcountries.eu/rest/v2/name/" + name;
      this.fetchInfo(url);
   }

   componentDidMount() {
      let url = "https://restcountries.eu/rest/v2/name/" + this.state.name;
      this.fetchInfo(url);
   }

   // THIS RENDER METHOD RENDERS EACH COUNTRY NAME WITHOUT
   // IMPORTING COUNTRIES.JS
   //
   //  render() {
   //     var { countries } = this.state;
   //     return (
   //        <div className="App">
   //           <ul>
   //              {countries.map(country => (
   //                 <li key={country.alpha3Code}>{country.name}</li>
   //              ))}
   //           </ul>
   //        </div>
   //     );
   //  }

   // THE COMMENTED CODE BELOW IS ANOTHER WAY OF DOING THE SAME THING
   //
   //  state = {
   //     countries: []
   //  };

   //  async componentDidMount() {
   //     const url = "https://restcountries.eu/rest/v2/name/col";
   //     const response = await fetch(url);
   //     const data = await response.json();
   //     console.log(data[0].name);
   //     this.setState({ country: data[0] });
   //     //console.log(data);
   //  }

   //  render() {
   //    return (
   //      <div>
   //        <p>{JSON.stringify(this.state.countries)}</p>
   //      </div>
   //    )
   //  }
}
export default App;
