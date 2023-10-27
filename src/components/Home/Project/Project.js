import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    const navigate = useNavigate();

    const { id,name, image, description, technology, live, code } = project;
    
    const handleDetails = (project) => {
        console.log(project);

        navigate(`/project/${id}`);
    }
    return (
        <div className='project-container'>
            <div className='thumbnail'>
                <img src={image} alt="" />
            </div>
            <h2 className='project-title-center'>{name}</h2>
            <p>{description}</p>
            <p>{technology}</p>
            <p>Live Site : {live}</p>
            <p>Code Link : {code}</p>
            <button onClick={() => handleDetails(id)}>Details</button>
        </div>
    );
};

export default Project;