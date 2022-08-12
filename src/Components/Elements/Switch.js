import React from 'react';
import { Link } from 'react-router-dom';
import './Switch.css'

const Switch = props =>{



    return(
        <label className="rocker rocker-small">
     <Link to={props.goToPage}><input type="checkbox"  defaultChecked/></Link>
        <span className="switch-left">{props.toGo}</span>
        <span className="switch-right">{props.at}</span>
    </label>
    );
}

export default Switch;