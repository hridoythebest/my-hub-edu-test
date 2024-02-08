import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from "../context";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [langToggle, setLangToggle] = useState(false)

  const {language, setLanguage, contract, address} = useStateContext();
  

  const navigate = useNavigate();

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar "> 
    
   
  <Link to="/"><h1 className="font-bold text-[70px] text-gradient">HUB</h1></Link>     

      <p className="text-primary pl-[50px] font-semibold text-[20px]">Hybrid University of Blockchain</p>
      

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-10">

              <p onClick={async() => {
                  const data = await contract.call('payed', address)
                  const studata = await contract.call("payedForStudies", address)
                  if(data || studata === true) {
                  navigate('/Home')}
              }} >Home</p>

          </li>
        <a href="https://my-hub-test.vercel.app/" className="cursor-pointer"> { language != "Russian" ? <li>To main website</li>
        : <li>На основной сайт</li>
      }</a> 

      
        <li className="flex flex-col ml-10 cursor-pointer">
         {language != "Russian" ? <p onClick={() => setLangToggle(!langToggle)}>Select Language</p>
         : <p onClick={() => setLangToggle(!langToggle)}>Выбрать язык</p>
        }
          {langToggle === true && <ul>
            <li onClick={() => {setLanguage("English")
             setLangToggle(false)}}>English</li>
            <li onClick={() => {setLanguage("Russian")
            setLangToggle(false)
          }}>Русский</li>
          </ul> }
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        /> */}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
        <li>To main website</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;