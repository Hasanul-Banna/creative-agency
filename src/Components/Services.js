import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ img, name, des }) => {

    return (
        
        <div style={{width:"300px"}} id="card" className=" p-5" >
            <Link className="text-decoration-none text-dark" to="/order"> 
            <img style={{width:"150px"}} src={`http://localhost:5000/${img}`} alt="" />
            <h3>{name}</h3>
            <p>{des}</p>
            </Link>
        </div>
        
    );
};

export default Services;