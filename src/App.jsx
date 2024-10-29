import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import AddDoc from './Component/AddDoc'
import DocSection from './Component/DocSection'
import { AdminContext } from './Context/DashBoardProvider'
import EditDoc from './Component/EditDoc'
import MentorSection from './Component/MentorSection'
import Login from './Component/Login'
import AddMentors from './Component/AddMentors'
import Editmentors from './Component/Editmentors'
import RoadmapSection from './Component/RoadmapSection'
import AddRoadmap from './Component/AddRoadmap'
import UserSection from './Component/UserSection'

function App() {
  const { togglemode } = useContext(AdminContext)
  return (
    <div className='w-[100%] h-[100%] lg:h-[100vh]'>
      <div className={`w-[100%] h-[100%] flex flex-col lg:flex lg:flex-row ${togglemode ? "dark" : "light"}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<DocSection />} />
          <Route path='/addDoc' element={<AddDoc />} />
          <Route path='/editdoc' element={<EditDoc />} />
          <Route path='/mentorpage' element={<MentorSection />} />
          <Route path='/addMentor' element={<AddMentors />} />
          <Route path='/editmentor' element={<Editmentors />} />
          <Route path='/roadmapPage' element={<RoadmapSection />} />
          <Route path='/addroadmap' element={<AddRoadmap />} />
          <Route path='/userpage' element={<UserSection />} />
        </Routes>
      </div>
      {/* <Login /> */}
    </div>
  )
}

export default App