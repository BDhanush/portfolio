import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Achievements from './components/Achievements.tsx';
import ProjectPage from './pages/ProjectPage.tsx';
import ProgressBar from "react-scroll-progress-bar";
import './index.css';
import { projectItems } from './data/ProjectData.ts';
import { getLink } from './data/ProjectData.ts';
import Footer from './components/Footer.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {

  return (
    <BrowserRouter>
      <div className='gradient'>
        <ProgressBar height="4" bgcolor="#729E8E" duration="0.2"/>
        <Routes>
          <Route path="/" element={
            <>

              <Navbar/>
              <About/>
              <Experience/>
              <Achievements/>
              <Projects/>
              <Footer/>

            </>
          }/>
          {projectItems.map(item => (
              <Route path={`projects/${getLink(item.title)}`} element={
              <ProjectPage
                ytLink={item.ytLink}
                title={item.title}
                description={item.description}
                images={item.images}
                githubLink={item.githubLink}
                otherLinks={item.otherLinks}

              />} />
            ))}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
