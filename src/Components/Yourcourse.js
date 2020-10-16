import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { UserContext } from '../App';
import Enrolled from './Enrolled';


const Yourcourse = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userEvent, setuserEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getEvents?email=' + loggedInUser.email, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const filteredData = data.find(x => x.email === loggedInUser.email);
                setuserEvent(data)
            })
    }, []);
    return (
        <div style={{overflowX:"hidden"}}  className="row pl-4 mt-2" >
            <Sidebar></Sidebar>
            <div style={{overflowX:"hidden"}} className="col-md-10">
                <div className="row">
                {
                    userEvent.map(x => <Enrolled name={x.service} des={x.description} ></Enrolled>)
                }
                </div>
               

            </div>
        </div>
    );
};

export default Yourcourse;