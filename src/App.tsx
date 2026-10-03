import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Achievements from './components/Achievements.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';
import './index.css';
import Footer from './components/Footer.tsx';
import NotFound from './pages/NotFound.tsx';

// Project pages are only needed after navigating away from the home page
const ProjectPage = lazy(() => import('./pages/ProjectPage.tsx'));

function Layout() {
  return (
    <div className='gradient'>
      <ScrollProgress/>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      {/* Scrolls to top on new pages and restores position on back/forward */}
      <ScrollRestoration/>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar/>
      <About/>
      <Experience/>
      <Achievements/>
      <Projects/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: '/', element: <Home/> },
      { path: 'projects/:slug', element: <ProjectPage/> },
      { path: '*', element: <NotFound/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
