import React, {useState} from 'react'
import { useStateContext } from '../context'

const ChallengeCard = (props) => {
    const [toggle, setToggle] = useState(false)
    const {language} = useStateContext();
  return (
    <div className='flex flex-col'>
       {language == "English" ? <h1 className='text-[30px] mb-[15px]'>Challenge №{props.num}</h1>:
        <h1 className='text-[30px] mb-[15px]'>Задание №{props.num}</h1>
        }
        <p className='text-[20px] mb-[15px] ml-2'>{props.text}</p>
        <div className="text-[20px] bg-[#BCCFCF] rounded-[10px] w-[600px]">
            {props.challenge}
        </div>

      {language ==="English" ?  <button 
        onClick={() => setToggle(prev => !prev)}
       className='text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px]'>Solution</button>:
       <button 
        onClick={() => setToggle(prev => !prev)}
       className='text-[20px] bg-[#BCCFCF] rounded-[10px] my-[15px]'>Решение</button>
       }
     { toggle && <p className='text-[20px] mb-[15px] bg-[#BCCFCF] rounded-[10px] p-2'>{props.solution}</p> }

    </div>
  )
}

export default ChallengeCard