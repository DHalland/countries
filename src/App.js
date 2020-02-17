import React, { Component } from "react";
import "./App.css";

class App extends Component {
   state = {
      country: {}
   };

   async componentDidMount() {
      const url = "https://restcountries.eu/rest/v2/name/col";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data[0].name);
      this.setState({ country: data[0] });
      //console.log(data);
   }
   render() {
      return (
         <div>
            <p>{JSON.stringify(this.state.country)}</p>
         </div>
      );
   }
}
export default App;
