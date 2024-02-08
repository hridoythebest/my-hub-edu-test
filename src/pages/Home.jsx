import React from 'react'
import { useStateContext } from '../context'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

const Home = () => {
  const {authData, studyData} = useStateContext()
  return (
    <> 
     <div className='flex grid grid-cols-3 gap-8 content-start'>
  {studyData && <Link to="/HTML"><CourseCard title="HTML & CSS" num="1"/></Link> }
   {studyData && <Link to="/Javascript" ><CourseCard title="Javascript " num="1"/></Link>  }
  {studyData && <Link to="/ReactPage" ><CourseCard title="React"/></Link> }
  { studyData && <Link to="/SolPage"><CourseCard title="Solidity"/></Link> }
 {/* {studyData || studyData ? <Link to="/AiPage"><CourseCard title="Ai and Code"/> </Link> : Null}
 {studyData || studyData ? <Link to="/Python" ><CourseCard title="Python for begginers"/> </Link>  : Null}
 {studyData || studyData ? <Link to="/Projects" > <CourseCard title="Complete Projects"/> </Link>: Null} */}
    
  </div>
  </>

  )
}

export default Home
