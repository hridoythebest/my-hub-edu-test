import React from 'react';

 import { SolSidebar } from '../components';
 import Navbar from '../components/NavBar';
import { useStateContext } from '../context';


const ReactPage = () => {

  const {language} = useStateContext();

  return (
    <div className="relative sm:-8 p-4 bg-[#E2F0EF] min-h-screen flex flex-row">
      
      <div className="sm:flex hidden mr-10 relative">
        
       {language != "Russian" ? <SolSidebar num="2"/> :
       <SolSidebar num="8"/>
       }
         
         
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {/* <Navbar />  */}
      </div>
      
    </div>
  )
}

export default ReactPage