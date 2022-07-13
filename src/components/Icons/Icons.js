import React from 'react';
import './Icons.css';
import Cloud from '../../assets/icons/cloud.svg';
import Fog from '../../assets/icons/fog.svg';
import Rain from '../../assets/icons/rain.svg';
import Snow from '../../assets/icons/snow.svg';
import Sun from '../../assets/icons/sun.svg';
import Thunder from '../../assets/icons/thunder.svg';

const Icons = (props) => {
    switch (props.icon) {
        case 200:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 201:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 202:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 230:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 231:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 232:
            return <img className="icon" src={Thunder} alt="Thunder" />
        case 233:
            return <img className="icon" src={Thunder} alt="Thunder" />

        case 300:
            return <img className="icon" src={Rain} alt="Rain" />
        case 301:
            return <img className="icon" src={Rain} alt="Rain" />
        case 302:
            return <img className="icon" src={Rain} alt="Rain" />
        case 500:
            return <img className="icon" src={Rain} alt="Rain" />
        case 501:
            return <img className="icon" src={Rain} alt="Rain" />
        case 502:
            return <img className="icon" src={Rain} alt="Rain" />
        case 511:
            return <img className="icon" src={Rain} alt="Rain" />
        case 520:
            return <img className="icon" src={Rain} alt="Rain" />
        case 521:
            return <img className="icon" src={Rain} alt="Rain" />
        case 522:
            return <img className="icon" src={Rain} alt="Rain" />
        
        case 600:
            return <img className="icon" src={Snow} alt="Snow" />
        case 601:
            return <img className="icon" src={Snow} alt="Snow" />
        case 602:
            return <img className="icon" src={Snow} alt="Snow" />
        case 610:
            return <img className="icon" src={Snow} alt="Snow" />
        case 611:
            return <img className="icon" src={Snow} alt="Snow" />
        case 612:
            return <img className="icon" src={Snow} alt="Snow" />
        case 621:
            return <img className="icon" src={Snow} alt="Snow" />
        case 622:
            return <img className="icon" src={Snow} alt="Snow" />
        case 623:
            return <img className="icon" src={Snow} alt="Snow" />
        
        case 700:
            return <img className="icon" src={Fog} alt="Fog" />
        case 711:
            return <img className="icon" src={Fog} alt="Fog" />
        case 721:
            return <img className="icon" src={Fog} alt="Fog" />
        case 731:
            return <img className="icon" src={Fog} alt="Fog" />
        case 741:
            return <img className="icon" src={Fog} alt="Fog" />
        case 751:
            return <img className="icon" src={Fog} alt="Fog" />

        case 800:
            return <img className="icon" src={Sun} alt="Sun" />
        case 801:
            return <img className="icon" src={Cloud} alt="Cloud" />
        case 802:
            return <img className="icon" src={Cloud} alt="Cloud" />
        case 803:
            return <img className="icon" src={Cloud} alt="Cloud" />
        case 804:
            return <img className="icon" src={Cloud} alt="Cloud" />

        case 900:
            return <img className="icon" src={Rain} alt="Rain" />

        default:
            return (
                <React.Fragment>
                    <img className="icon" src={Sun} alt="Sun" />
                    <h5>{props.description}</h5>
                </React.Fragment>
            );
    }
}

export default Icons;