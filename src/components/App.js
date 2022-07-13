import React, { Component } from "react";
import Moment from "moment";

import "./App.css";
import logo from "../assets/logo.svg";
import api from "../api/api";
import Error from "./Error/Error";
import SearchBar from "./SearchBar/SearchBar";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import WeatherToday from "./WeatherToday/WeatherToday";

const API_KEY = "129e48abac7e4d3b9eefe5d3d4a7e10c";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      city: "null",
      error: null,
    };
  }

  searchCity = async (city) => {
    await api.get(`daily?city=${city}&key=${API_KEY}`).then((res) => {
      const temp = res.data.data;
      const city = res.data.city_name;

      if (temp != null && city != null) {
        this.setState({
          temp: temp,
          city: city,
          error: null,
        });
      } else {
        this.setState({
          temp: [],
          city: "null",
          error: "error",
        });
      }
    });
  };

  render() {
    Moment.locale("en");

    const date = this.state.temp.map((el) => {
      return Moment(el.datetime).format("DD/MM");
    });

    const minTemp = this.state.temp.map((el) => {
      return parseInt(el.low_temp);
    });

    const maxTemp = this.state.temp.map((el) => {
      return parseInt(el.max_temp);
    });

    const icon = this.state.temp.map((el) => {
      return el.weather.code;
    });

    const description = this.state.temp.map((el) => {
      return el.weather.description;
    });

    return (
      <div className="container">
        <div className="header">
          <h1>
            <img src={logo} className="logo" alt="Weather"></img>
            Weather App
          </h1>
          <h4>Created with ❤️ by Ayush</h4>
        </div>
        <SearchBar city={this.state.city} searchCity={this.searchCity} />
        <Error error={this.state.error} />
        <WeatherToday
          city={this.state.city}
          icon={icon[0]}
          minTemp={minTemp[0]}
          maxTemp={maxTemp[0]}
          description={description[0]}
        />
        <div className="forecastContainer">
          <WeatherForecast
            day={date[1]}
            icon={icon[1]}
            minTemp={minTemp[1]}
            maxTemp={maxTemp[1]}
            description={description[1]}
          />
          <WeatherForecast
            day={date[2]}
            icon={icon[2]}
            minTemp={minTemp[2]}
            maxTemp={maxTemp[2]}
            description={description[2]}
          />
          <WeatherForecast
            day={date[3]}
            icon={icon[3]}
            minTemp={minTemp[3]}
            maxTemp={maxTemp[3]}
            description={description[3]}
          />
          <WeatherForecast
            day={date[4]}
            icon={icon[4]}
            minTemp={minTemp[4]}
            maxTemp={maxTemp[4]}
            description={description[4]}
          />
          <WeatherForecast
            day={date[5]}
            icon={icon[5]}
            minTemp={minTemp[5]}
            maxTemp={maxTemp[5]}
            description={description[5]}
          />
        </div>
      </div>
    );
  }
}

export default App;
