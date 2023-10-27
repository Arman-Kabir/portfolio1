import  { useEffect, useState } from 'react';

const useProjects = () => {

    const [myprojects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMyProjects(data))
    }, [])

    return myprojects;
};

export default useProjects;