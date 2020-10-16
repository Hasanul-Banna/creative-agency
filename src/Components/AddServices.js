import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddServices = () => {
    const [card, setCard] = useState({});
    const [file, setFile] = useState(null);
    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleBlur = e => {
        const newCard = { ...card };
        newCard[e.target.name] = e.target.value;
        setCard(newCard)
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('description', card.description);
        formData.append('service', card.service);

        fetch('http://localhost:5000/createService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className="row ml-4 mt-2" >
            <Sidebar></Sidebar>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleBlur} type="text" name="service" className="form-control" placeholder="Service Name" /> <br />
                    <textarea onBlur={handleBlur} type="text" name="description" placeholder="description" className="form-control" /> <br />
                    <input onChange={handleFile} type="file" name="file" id="" className="form-control" />
                    <br />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;