import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { UserContext } from '../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [AllEvent, setAllEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getEvents?email=' + loggedInUser.email, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const filteredData = data.find(x => x.email === loggedInUser.email);
                setAllEvent(data)
            })
    }, []);
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllEvent.map(x =>
                                <tr>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.service}</td>
                                    <td>{x.description}</td>
                                    <td>{x.price}</td>
                                </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ServiceList;