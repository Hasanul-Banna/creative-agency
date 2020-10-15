import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addServices',{
            method:'POST',
            headers:{ 'content-type':'application/json'},
            body : JSON.stringify(data)
        })
        .then( res => res.json())
        .then(success => {
            if (success) {
                alert('Congrats! New Service Addded')
            }
        } )
    };
    return (
        <div className="d-flex flex-wrap ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div style={{ width: "80%" }}>

                <form className="pt-5 pr-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" placeholder="course name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" placeholder="description" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="number" ref={register({ required: true })} name="price" placeholder="Price in USD" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;