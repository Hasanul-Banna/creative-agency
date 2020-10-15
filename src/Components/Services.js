import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ img, name, des }) => {

    return (
        
        <div id="card" className="col-sm-4 p-5" >
            <Link className="text-decoration-none text-dark" to="/order"> 
            <img className="w-25" src={require(`../images/icons/${img}`)} alt="" />
            <h3>{name}</h3>
            <p>{des}</p>
            </Link>
        </div>
        
    );
};

export default Services;