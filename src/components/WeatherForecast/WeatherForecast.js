import React from 'react';
import './WeatherForecast.css';
import Days from '../Days/Days';
import Icons from '../Icons/Icons';
import Temp from '../Temp/Temp';

const WeatherCard = (props) => {
    if(props.minTemp){
    return (
        <div className="weatherForecast">
            <Days day={props.day} />
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description} size={2} />
            <Icons icon={props.icon} />
        </div>
        )
    } else {
        return(
            <React.Fragment></React.Fragment>
        )
    }
}

export default WeatherCard;