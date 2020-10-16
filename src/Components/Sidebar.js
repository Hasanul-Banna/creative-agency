import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png" ;


const Sidebar = () => {
    return (
        <div style={{overflowX:"hidden"}}  className="d-flex flex-column float-left col-md-2">
            <Link to="/home"><img className="w-75" src={logo} alt=""/></Link>
                        
            <br/>
            <Link to="/order">Order</Link><br/>
            <Link to="/yourcourse">Services</Link><br/>
            <Link to="/yourreview">Review</Link><br/>
            <Link to="/serviceslist">Services list</Link><br/>
            <Link to="/addservices">Add service</Link><br/>
            <Link to="/makeadmin">Make Admin</Link>
            
        </div>
    );
};

export default Sidebar;