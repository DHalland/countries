import React, { Component } from "react";
import "./App.css";
import Country from "./components/country";
import SearchBar from "./components/searchbar";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "colombia",
         flag:
            "https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjExNjgyOX0"
      };
   }

   handleEnter = e2 => {
      if (e2.key === "Enter") {
         this.setState(
            {
               name: e2.target.value
            },
            () => {
               this.fetchCountryInfo(this.state.name);
            }
         );
      }
   };

   fetchFlag(url) {
      fetch(url)
         .then(result => result.json())
         .then(json => {
            this.setState({ flag: json.results[0].urls.full });
         });
   }

   render() {
      const api_key = process.env.REACT_APP_API_KEY;
      let backgroundimg =
         "https://api.unsplash.com/search/photos?query=" +
         this.state.name +
         "&orientation=landscape&client_id=" +
         api_key;
      this.fetchFlag(backgroundimg);
      return (
         <div>
            <div
               id="top"
               style={{ backgroundImage: "url(" + this.state.flag + ")" }}
               className="row"
            >
               <SearchBar
                  handleEnter={this.handleEnter.bind(this)}
                  name={this.state.name}
                  //fetchCountryInfo={this.fetchCountryInfo.bind(this)}
               />
               <Country info={this.state} />
            </div>
         </div>
      );
   }

   fetchInfo(url) {
      fetch(url)
         .then(result => result.json())
         .then(json => {
            // console.log(json);
            this.setState({
               name: json[0].name,
               capital: json[0].capital,
               population: json[0].population,
               region: json[0].region,
               subregion: json[0].subregion,
               timezones: json[0].timezones,
               currencies: json[0].currencies[0].name,
               languages: json[0].languages[0].name
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
