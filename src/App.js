import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div class="row" id="info">
          <div className="col-12">
            <h1>Colombia</h1>
            <hr></hr>
            <p className="left">Capital: Bogota</p>
            <br></br>
            <p className="left">Region: Americas</p>
            <br></br>
            <p className="left">SubRegion: South America</p>
            <br></br>
            <p className="left">Population: 48759958</p>
            <br></br>
            <p className="left">Timezones: UTC-05:00</p>
            <br></br>
            <p className="left">Currencies: Colombian Peso</p>
            <br></br>
            <p className="left">Languages: Spanish</p>
            <div className="button">
              <a href="#moreInfo" class="btn btn-dark btn-xl page-scroll">More Info</a>
            </div>
          </div>
        </div>
        <div class="row" id="flag">
          <div className="col-12">

          </div>
        </div>
        <div class="row" id="moreInfo">
          <div className="col-12">

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
