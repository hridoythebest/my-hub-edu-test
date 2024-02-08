import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import TextPage from './components/TextPage';

 import { SolSidebar } from './components';
 import {AiPage, HTMLPage, JavascriptPage, SolPage, PythonPage, Projects} from './pages'
 import Navbar from './components/NavBar';
import Home from './pages/Home';
import Open from './pages/Open';
import ReactPage from './pages/ReactPage';


const App = () => {
    
  return (
    <div className="relative sm:-8 p-4 bg-[#E2F0EF] min-h-screen flex flex-row">
      
      <div className="sm:flex hidden mr-10 relative">

      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        
     
        <Routes>
          <Route path="/SolPage" element={<SolPage/>} />
          <Route path="/Home" element={<Home/>} />
         < Route path="/HTML" element={<HTMLPage/>} />
         <Route path="/" element={<Open/>}/>
         <Route path="ReactPage" element={<ReactPage />} />
         <Route path="AiPage" element={<AiPage/>} />
         <Route path="Javascript" element={<JavascriptPage />} />
         <Route path="Python" element={<PythonPage />} />
         <Route path="Projects" element={<Projects/>} />

        </Routes>
      </div>
      
    </div>
  )
}

export default App