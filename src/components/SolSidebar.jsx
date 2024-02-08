import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiLinks, HTMLlinks, ReactLinks, solLinks, JavascriptLinks, PythonLinks, ProjectLinks, RusSolLinks, RusReactLinks } from '../constants';
import TextPage from './TextPage';
import {Complete, completedCourses, totalCourses} from '../constants/CompletionCounter'
import { useStateContext } from '../context';

const Sidebar = (props) => {
const {language} = useStateContext();

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('');
    const [isDropActive, setIsDropActive] = useState('')
    const [count, setCount] = useState(() => {
      const value = localStorage.getItem("count")
      if (!value) {
        return 0
      }
      return Number.parseInt(value, 10)
    })
  
    useEffect(() => {
      localStorage.setItem("count", count)
    }, [count])

    const links = [solLinks, HTMLlinks, ReactLinks, AiLinks, JavascriptLinks, PythonLinks, ProjectLinks, RusSolLinks, RusReactLinks]
    const arrNum = parseInt(props.num)

  const {studyData} = useStateContext();

  function handleClick(id) {
    setIsDropActive(prev => prev + 1)

    setCount(prev => prev + 1)

  }

  
    return (
        <>
      <div className="flex justify-between items-center flex-col sticky top-5">
        {/* <Link to="/">
          <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} />
        </Link> */}
        <div>
  
        </div>
  
        <div className="flex-1 flex flex-col justify-between items-center bg-black rounded-[20px] w-[200px] py-4 mt-12">
          <div className="flex flex-col justify-center text-[#F1F2F2] gap-3 cursor-pointer">
            {studyData != true ? links[arrNum].filter((item, index) => index < 6).map((link) => (
              <div  
                key={link.id}
                {...link}
                onClick={() => {
                    setIsActive(link.name);
                    // navigate(link.link);
                  
                }}
                
              >
                
                <p  className='text-[20px]'>{link.text}</p>
             {link.dropdowns.map((drop) => {
                if(isActive === link.name)
                return (
                   
                <div 
                key={drop.text}
                className='flex flex-col'>
                <span onClick={() => {
                    setIsDropActive(drop.id)
                }} className='mt-[10px] text-[#ADBFBF]'>{drop.text}</span></div> )
})  }
              </div>
            )):
            links[arrNum].map((link) => (
              <div  
                key={link.id}
                {...link}
                onClick={() => {
                    setIsActive(link.name);
                    // navigate(link.link);
                  
                }}
                
              >
                
                <p  className='text-[20px]'>{link.text}</p>
             {link.dropdowns.map((drop) => {
                if(isActive === link.name)
                return (
                   
                <div 
                key={drop.text}
                className='flex flex-col'>
                <span onClick={() => {
                    setIsDropActive(drop.id)
                }} className='mt-[10px] text-[#ADBFBF]'>{drop.text}</span></div> )
})  }
              </div>
            ))
            }
          </div>



        </div>
        
      </div>
      
      { links[arrNum].map((link) => (
    
 <div 
 key={link.name}
 {...link}
 className='mt-[80px] ml-[20px]'>
    {link.dropdowns.map((drop) => {
        if(drop.id === isDropActive)
            return(
              <div className='flex flex-col '>
              <TextPage text={drop.content}/>
              {/* <NextLesson handleClick={handleClick}/> */}
           {  language != "Russian" ? <div  className='flex flex-center ml-[45vh]'>
      <button onClick={() => handleClick(drop.id)} className='w-[200px] mt-[40px] h-[80px] bg-blue-gradient
     font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]'>
        Next Lesson
    </button>  

     </div> :
     <div  className='flex flex-center ml-[45vh]'>
     <button onClick={() => handleClick(drop.id)} className='w-[200px] mt-[40px] h-[80px] bg-blue-gradient
    font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]'>
       Следущий урок
   </button>  

    </div>
      }
              </div>
        
        )}
)}

 
</div>)) }
      



      </>
    )
  }
  
  export default Sidebar