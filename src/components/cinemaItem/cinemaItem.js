import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <img src={props.picture}/>
            <p>{props.addres}</p>
            <p>{props.workingTime}</p>
            <Link to={"/program/"+props.id}>PROGRAM</Link>
        </div>
    );
}