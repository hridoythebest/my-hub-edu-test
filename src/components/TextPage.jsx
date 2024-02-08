import React from 'react'

import { useLocation } from 'react-router-dom';

const TextPage = (props) => {

  return (
    <div className='text-black font-epilogue leading-[30px]'> 
        {props.text}
        </div>
  )
}

export default TextPage