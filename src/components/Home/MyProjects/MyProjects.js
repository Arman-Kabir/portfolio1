import useProjects from '../../useProjects/useProjects';
import Project from '../Project/Project';
import './MyProjects.css';

const MyProjects = () => {
    const myprojects = useProjects();

    return (
        <div className='projects-container'>
            <h2 className='projects-intro'>My Projects...... {myprojects.length}</h2>

            <div className='projects-wrapper'>
                {
                    myprojects.map((project,index)=> <Project
                    key={index}
                    project={project}
                    ></Project>)
                }

            </div>
        </div>
    );
};

export default MyProjects;