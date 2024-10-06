import React from 'react';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from "./pages/Projects.jsx";
import ProjectsDetail from "./pages/ProjectsDetail.jsx"
import Contact from "./pages/Contact.jsx";

import './index.css';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Projects />} />

          <Route path="/projects/:name" element={<ProjectsDetail />} />

          <Route path='/contact' element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)