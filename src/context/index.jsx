import React, { useContext, createContext, useState, useEffect } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xAe7577272A5B79EB9328319c6DeefE32A28b718f');
  const [authData, setAuthData] = useState(() => localStorage.getItem("auth") === "true")
  const [studyData, setStudyData] = useState(() => localStorage.getItem("studAuth") === "true")
  const [testData, setTestData] = useState(() => localStorage.getItem("testData"))
  const [language, setLanguage] = useState(() => localStorage.getItem("language"))

  const address = useAddress();
  const connect = useMetamask();

  useEffect(() => {
    localStorage.setItem("auth", authData)
  }, [authData])

  useEffect(() => {
    localStorage.setItem("studAuth", studyData)
  }, [studyData])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  

  const checkAuth = async () => {
    try {
      const data = await contract.call('payed', address)
      const studata = await contract.call("payedForStudies", address)
      if(data === true) {
        setAuthData(true);
      } 
      if(data != true && studata != true){
        alert("You haven't payed")
      } 
      if(studata === true) {
        setStudyData(true)
      }
      if(data === true) {
        setTestData(address)
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        checkAuth,
        authData,
        studyData,
        testData,
        language,
        setLanguage
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

//0xE3e96B75ee96b423D5279B96cacbC2B2941E5750