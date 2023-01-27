import './App.css';
import Navbar from './component/Navbar';
import About from './component/sections/About';
import Contact from './component/sections/Contact';
import Experience from './component/sections/Experience';
import Home from './component/sections/Home';
import PersonalProjects from './component/sections/PersonalProjects';
import ProjectsHandled from './component/sections/ProjectsHandled';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <ProjectsHandled/>
      <PersonalProjects/>
      <Contact/>
    </div>
  );
}

export default App;
