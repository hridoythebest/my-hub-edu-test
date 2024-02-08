import React, {useState, useContext} from 'react'
import { useStateContext } from '../context';
import { useNavigate } from 'react-router-dom'

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const Open = () => {
    const {connect, address, contract, checkAuth, authData,} = useStateContext();

    const navigate = useNavigate();

    

  return (
    <div className='flex flex-row gap-8 flex justify-center'>
   {!address &&  <button className='text-[20px] bg-[#9EBEBE] max-w-[200px] rounded-[10px] py-3 px-3' onClick={connect}>Connect Metamask</button> }
    <button className='text-[20px] bg-[#9EBEBE] max-w-[200px] rounded-[10px] px-3' onClick={async() => {
    
      const data = await contract.call('payed', address)
      const studata = await contract.call("payedForStudies", address)
      if(data || studata === true) {
      navigate('/Home')}
      checkAuth()
      
    }
      }>Enter website</button>
  
   
    </div>
    
  )
}

export default Open