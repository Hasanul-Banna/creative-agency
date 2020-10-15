import React from 'react';

const Review = ({ img, name, designition, description }) => {
    return (
        <div  className="col-md-4">
            <div style={{border:'1px solid lightgray'}}>
            <div className="d-flex">
                <img className="w-25" src={require(`../images/${img}`)} alt="" />
                <p className="mt-3">{name} <br /> <small>{designition}</small> </p>
            </div>
            <p className="ml-3" >{description}</p>
            </div> 
        </div>
    );
};

export default Review;