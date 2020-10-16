import React from 'react';
import Sidebar from './Sidebar';


const MakeAdmin = () => {
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>

            <div className="col-md-6">
                <form>
                    <input type="email" name="service" className="form-control" placeholder="Admin@gmail.com" /> <br />

                    <button type="submit" class="btn btn-primary">Set Admin</button>
                </form>
            </div>
        </div>

    );
};

export default MakeAdmin;