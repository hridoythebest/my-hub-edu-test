import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context';

// import { tagType, thirdweb } from '../assets';
// import { daysLeft } from '../utils';

const   CourseCard= (props) => {

  const {language} = useStateContext();

  
  return (
    <div className="sm:w-[380px] h-[300px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer my-[20px]" >
      {/* <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/> */}

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
       
        </div>

        <div className="block">
          <h1 className="font-epilogue font-semibold text-[30px] text-gradient text-left leading-[26px] truncate">{props.title}</h1>
          {/* <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{props.description}</p> */}
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
          
          </div>
          <div className="flex flex-col">
           
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          {/* <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]"> */}
            {/* <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/> */}
          </div>
          {props.num == "1" ? <p className='flex-1 font-epilogue font-normal text-[17px] text-white truncate'>Coming soon</p>: undefined}
       {language != "Russian" ? <p className="flex-1 font-epilogue font-normal text-[17px] text-[#808191] truncate">To Course &gt;</p>
       :<p className="flex-1 font-epilogue font-normal text-[17px] text-[#808191] truncate">На курс &gt;</p>
      }
        {/* </div> */}
      </div>
    </div>
  )
}

export default CourseCard