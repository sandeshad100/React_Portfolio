
import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";

import Home from './user/layout/home/Home';
import Projects from './user/layout/home/components/Projects';
function App() {


  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
