import React from "react";
import {Link} from "react-router-dom";
import './Useritem.css'


const Useritem = props =>{
    return(
        <li className="list-class ">
        <div className="card mb-3 body-class" >
        <div className="row g-0 in-card">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start" alt={`user-pic`}/>
          </div>
          <div className="col-md-8">
      <Link className="links-css" to="#u1/places">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small className="text-muted">{props.places === 1?'Place Visited :':'Places Visited :'}{props.places}</small></p>
            </div>
        </Link>
          </div>
        </div>
      </div>
      </li>
    );
}

export default Useritem;