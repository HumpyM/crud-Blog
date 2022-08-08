import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBLog = () => {

    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        title: "",
        image: "",
        description: ""
    })

    const handleChange = (e) => {
        let formdatacopy = {...formdata};
        formdatacopy[e.target.name] = e.target.value;
        setFormData(formdatacopy);
    }

    console.log(formdata);

    const handleSubmit = (e) => {
        e.preventDefault();
        let storeddata = JSON.parse(localStorage.getItem("data"));
        storeddata.push(formdata);
        localStorage.setItem("data", JSON.stringify(storeddata));
        console.log(storeddata);
        navigate('/');

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>'
            <input type="text" name="title" placeholder='title' value={formdata.title} onChange={handleChange}/>
            <input type="text" name="image" placeholder='image' value={formdata.image} onChange={handleChange}/>
            <input type="text" name="description" placeholder='description' value={formdata.description} onChange={handleChange}/>
            <button type="submit">Add Blog</button>
        </form>
    </div>
  )
}

export default CreateBLog