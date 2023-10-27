import React, { useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import { ProjectsContext } from '../../../App';
import './ProjectDetails.css';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
    const [main, setMain] = useState('');

    const handleImage = (image) => {
        setMain(image);
    }

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const myprojects = useContext(ProjectsContext);
    console.log(myprojects);

    const project = myprojects.find(project => project.id == id);
    console.log(project);

    // if(myprojects.length<1){
    //     navigate('/');
    // }

    // const {name,image,image1,image2,image3,serverCode,description,live,code,technology} = project;

    return (
        <div className='details-container'>
            <div className='image-container'>
                <div className='main-image'>
                    <img src={main ? main : project?.image} alt="" />
                </div>

                <div className='other-images'>

                    <div className='ss-image'>
                        <img onClick={() => handleImage(project?.image)} src={project?.image} alt="" />
                    </div>
                    <div className='ss-image'>
                        <img onClick={() => handleImage(project?.image1)} src={project?.image1} alt="" />
                    </div>
                    <div className='ss-image'>
                        <img onClick={() => handleImage(project?.image2)} src={project?.image2} alt="" />
                    </div>
                    <div className='ss-image'>
                        <img onClick={() => handleImage(project?.image3)} src={project?.image3} alt="" />
                    </div>

                </div>
            </div>

            {/* info container */}
            <div className='info-container'>
                <h3>Project Name: {project?.name}</h3>
                <p>Description: {project?.description}</p>
                <p>Technology Used: {project?.technology}</p>

                <div>
                    <ul className='links'>
                        <li> <a href={project?.live} target='_blank' >Live Site</a> </li>
                        <li> <a href={project?.code} target='_blank' >Client-Side-Code</a> </li>
                        <li> <a href={project?.serverCode} target='_blank' >Server-Side-Code</a> </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;