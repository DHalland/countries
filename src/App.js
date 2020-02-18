import React, { Component } from "react";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         countries: []
      };
   }

   componentDidMount() {
      fetch("https://restcountries.eu/rest/v2/all")
         .then(result => result.json())
         .then(json => {
            this.setState({
               countries: json
            });
         });
   }

   render() {
      var { countries } = this.state;
      return (
         <div className="App">
            <ul>
               {countries.map(country => (
                  <li key={country.alpha3Code}>{country.name}</li>
               ))}
            </ul>
         </div>
      );
   }

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
