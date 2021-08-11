import React, { Component, createRef } from 'react';
import './WeatherApp.css';
import ErrorMsg from './Error';
import LoadingMsg from './Loading';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [
        { id: '1', value: 'ahmedabad', cityName: 'Ahmedabad' },
        { id: '2', value: 'banglore', cityName: 'Banglore' },
        { id: '3', value: 'Delhi', cityName: 'Delhi' },
      ],
      error: null,
      isLoaded: false,
      apiResponse: [],
    };
  }

  

  getTemperature = () => {
    console.log('getTemperature');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(
        result => {
          setTimeout(
            () =>  console.log('timeout'), 
            1000
          );
          console.log(result);
          this.setState({
            isLoaded: false,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error,
          });
        },
      );
  };

  render() {
    const { error, isLoaded } = this.state;
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
          <div>
            <label>Select City:</label>
            <select>
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
