import React, { Component } from "react";

const Countries = ({ countries }) => {
   return (
      <div>
         <center>
            <h1>Countries</h1>
         </center>

         {countries.map(country => (
            <div class="card">
               <div class="card-body">
                  <h4 class="card-title">{country.name}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                     Population: {country.population}
                  </h6>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Countries;
