import React from 'react';
import Sidebar from './Sidebar';

const YourReview = () => {
    return (
        <div className="d-flex flex-wrap ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div style={{ width: "50%" }}>

                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name/Company name" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here..."></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-dark" />
                </form>
            </div>
        </div>
    );
};

export default YourReview;