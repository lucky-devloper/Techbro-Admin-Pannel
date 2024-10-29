import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import WelcomeTitle from './WelcomeTitle'

function AddMentors() {
  return (
    <div className='lg:w-[80%] h-[100vh] w-[100%] flex justify-center items-center lg:flex-col lg:justify-start'>
      <WelcomeTitle />
      <div className='w-[95%] lg:w-[650px] rounded-[15px] shadow-xl p-2 flex flex-col gap-2 bg-white lg:mt-14'>
        <h2 className='font-semibold text-2xl text-black'>Add Mentors</h2>
        <input type="text" placeholder='Enter name' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
        <input type="text" placeholder='Email address' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
        <input type="number" placeholder='Phone' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
        <input type="text" placeholder='Qualification' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
        <input type="text" placeholder='Position' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
        <input type="file" className='w-[100%] h-[40px] lg:h-[60px] p-1 lg:p-3 rounded-md outline-none border-2 bg-white text-black' />
        <div className='flex items-center gap-5'>
          <span className='flex items-center gap-2 font-semibold text-[#ee1059]'>
            <GoArrowLeft fontSize='25px' />
            <Link to='/mentorpage' className='text-xl'>Go Back</Link>
          </span>
          <span className='w-[150px] text-[14px] flex items-center justify-center gap-2 bg-[#ee1059] text-white font-semibold rounded-md h-[35px] lg:h-[45px]'>
            <FaCheckCircle />
            <button>Save Change</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AddMentors