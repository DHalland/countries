import React, { Component } from "react";
import "./App.css";
import Country from "./components/country";
import SearchBar from "./components/searchbar";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "switzerland",
         flag: "https://restcountries.eu/data/che.svg",
         image1:
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
         image2:
            "https://images.unsplash.com/photo-1527095655060-4026c4af2b25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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

   fetchImages(url) {
      fetch(url)
         .then(result => result.json())
         .then(json => {
           // if (json[0] !== undefined) {
               this.setState({
                  image1: json.results[0].urls.full,
                  image2: json.results[1].urls.full
               });
           // }
         });
   }

   render() {
      const api_key = process.env.REACT_APP_API_KEY;
      let countryName = "";
      if (this.state.name === "United States of America") {
         countryName = "USA";
      } else {
         countryName = this.state.name;
      }
      let backgroundimg =
         "https://api.unsplash.com/search/photos?query=" +
         countryName +
         "&orientation=landscape&client_id=" +
         api_key;
      console.log(backgroundimg);
      this.fetchImages(backgroundimg);

      return (
         <div>
            <div
               id="top"
               style={{ backgroundImage: "url(" + this.state.image1 + ")" }}
               className="row"
            >
               <SearchBar
                  handleEnter={this.handleEnter.bind(this)}
                  name={this.state.name}
               />
               <Country
                  background={this.state.image2}
                  flag={this.state.flag}
                  info={this.state}
               />
            </div>
         </div>
      );
   }

   fetchInfo(url) {
      fetch(url)
         .then(result => result.json())
         .then(json => {
            if (json[0] !== undefined) {
               this.setState({
                  alpha2Code: json[0].alpha2Code,
                  numericCode: json[0].numericCode,
                  name: json[0].name,
                  capital: json[0].capital,
                  population: json[0].population,
                  region: json[0].region,
                  subregion: json[0].subregion,
                  timezones: json[0].timezones.map(x => x + " "),
                  currencies: json[0].currencies[0].name,
                  languages: json[0].languages[0].name,
                  flag: json[0].flag,
                  borders: json[0].borders.map(x => x + " ")
               });
            }
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
