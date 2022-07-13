import React from 'react';
import './Temp.css';

const Temp = (props) => {
    return (
        <div className="Temp">
            <span className={'max size-'+props.size}>{props.maxTemp}°C</span>
        </div>
    )
}

export default Temp;