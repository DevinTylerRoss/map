import React, { Component } from "react";
import "./App.css";
import Place from "./Place";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js';


//myjson.com uri : https://api.myjson.com/bins/fx6to

class App extends Component {
  constructor(props){
      super(props);
      this.state ={
          places:[],
          allPlaces:[],
          selectedPlace: '',
          choice: 'all',
         
      }
  }

  componentDidMount(){
           
    fetch('https://api.myjson.com/bins/fx6to')
    .then( response => response.json())
    .then(data => {
       
       this.setState({
        places: data.places,
        allPlaces: data.places
    })
       
    });

  }

  updateChoice = (event) => {
      this.setState({
        choice: event.target.value,
        
      });

  };

  selectPlace = (place)=>{
    
      this.setState({
          selectedPlace:place
            
      })
     
  };

 
  
render() {

    let center={
        lat:45.5122,
        lng:-122.6587
    };

  

    if (this.state.selectedPlace){

        center={
            lat: this.state.selectedPlace.lat,
            lng: this.state.selectedPlace.lng
        }
    }
   
  return (
    
      <div className="app">
     
          <div className="main">
          <h1 role='navigation' className="title"> Portland Ice Creams</h1>
              <div className="dropdown">
              <select
                        onChange={this.updateChoice}
  									>  
                                <option value="all" defaultValue>All Ice Creams</option>
                                <option value="fancy">Just Fancy</option>
                                <option value="cheap">Just Cheap</option>
                              </select>
              </div>
              <div className="places">
              
                  {
                      
                      this.state.places.filter((place) => { if (this.state.choice === 'all') {return place}  else { return place.category === this.state.choice; }                /* if(true) return place.category === choice;*/})
                      .map((place) => {
                      return <Place
                          key={place.name}
                          name={place.name}
                          place={place}
                          handleClick={this.selectPlace}
                      ></Place>
                  })}
              </div>
          </div>
          <div role='application' className="map">
              <GoogleMapReact
                  center={center}
                  zoom={12}
                
                  
                  
              >
                  { this.state.places.filter((place) => { if (this.state.choice === 'all') {return place}  else { return place.category === this.state.choice; }                /* if(true) return place.category === choice;*/})
                      .map((place) => {
                      return <Marker
                          place={place}
                          handleClick={this.selectPlace}
                          review={place.review}
                          name={place.name}  
                          key={place.key}
                          lat={place.lat}
                          lng={place.lng}
                          text={place.category}
                          selected={place === this.state.selectedPlace}
                      ></Marker>
                  })}
              </GoogleMapReact>
          </div>
      </div>
  );
}
}

export default App;
