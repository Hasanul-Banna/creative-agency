import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png" ;


const Sidebar = () => {
    return (
        <div style={{width:"20%"}} className="d-flex flex-column float-left">
            <img className="w-75" src={logo} alt=""/>
            <br/>
            <Link to="/order">Order</Link><br/>
            <Link to="/yourcourse">Services</Link><br/>
            <Link to="/yourreview">Review</Link><br/>
            <Link to="/">Services list</Link><br/>
            <Link to="/">Add service</Link><br/>
            <Link to="/">Make Admin</Link>
            
        </div>
    );
};

export default Sidebar;