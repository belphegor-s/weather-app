import React from 'react';
import './WeatherToday.css';
import Icons from '../Icons/Icons';
import Temp from '../Temp/Temp';

const WeatherToday = props => {
    if(props.minTemp){
        return (
            <div className="weatherToday">
                <div>Today @ <strong>{props.city}</strong></div>
                <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description} size={5} />
                <Icons icon={props.icon} />
            </div>
            )
        } else {
            return(
                <React.Fragment></React.Fragment>
            )
    }
}

export default WeatherToday;