import React from 'react';

 import { SolSidebar } from '../components';
 import Navbar from '../components/NavBar';


const Projects = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#E2F0EF] min-h-screen flex flex-row">
      
      <div className="sm:flex hidden mr-10 relative">
        
         <SolSidebar num="6"/> 
         
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* <Navbar />  */}
      </div>
      
    </div>
  )
}

export default Projects