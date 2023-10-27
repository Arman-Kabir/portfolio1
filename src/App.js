import './App.css';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/Home/ProjectDetails/ProjectDetails';
import { createContext } from 'react';
import useProjects from './components/useProjects/useProjects';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

export const ProjectsContext = createContext([]);

function App() {
  const myprojects = useProjects();
  // console.log(myprojects);

  return (

    <ProjectsContext.Provider value={myprojects}>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
          {/* <Route></Route> */}
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </ProjectsContext.Provider>

  );
}

export default App;
