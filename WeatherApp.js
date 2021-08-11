import React, { Component, createRef, PureComponent } from 'react';
import './WeatherApp.css';
import ErrorMsg from './Error';
import LoadingMsg from './Loading';

class WeatherApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [
        { id: '1', value: 'ahmedabad', cityName: 'Ahmedabad', },
        { id: '2', value: 'banglore', cityName: 'Banglore' },
        { id: '3', value: 'Delhi', cityName: 'Delhi' },
      ],
      selectedCity:'ahmedabad',
      error: null,
      isLoaded: false,
      apiResponse: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
     
    this.setState({ selectedCity: e.target.value },()=>{
      console.log("city Selected="+this.state.selectedCity);
    });
     
  }

  getTemperature = () => {
    console.log('getTemperature');
    console.log("city Selected="+this.state.selectedCity);
    this.setState({ isLoaded: true });
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(
        result => {
          setTimeout(
            function () {
              this.setState({ isLoaded: false });
            }.bind(this),
            1500,
          );
        },
        error => {
          this.setState({
            isLoaded: false,
            error,
          });
        },
      );
  };

  render() {
    const { error, isLoaded,selectedCity } = this.state;
    if (error) {
      return (
        <>
          <ErrorMsg />
        </>
      );
    } else if (isLoaded) {
      return (
        <>
          <LoadingMsg />
        </>
      );
    } else {
      return (
        <>
          <h1>Weather App</h1>
          <div className='weather'>
            <label>Select City:</label>
            <select value={this.state.selectedCity} onChange={this.handleChange} >
              {this.state.cityList.map(city => (
                <option key={city.id} value={city.value}>
                  {city.cityName}
                </option>
              ))}
            </select>
            <button onClick={this.getTemperature}>Get Tempereture</button>
          </div>
        </>
      );
    }
  }
}

export default WeatherApp;
