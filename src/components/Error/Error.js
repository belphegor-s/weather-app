import React from 'react';
import './Error.css';

const Error = props => {
    if(props.error) {
        return (
            <div className="error">City not found</div>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}

export default Error;