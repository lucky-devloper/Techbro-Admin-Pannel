import React, { useContext } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import DocsData from './DocsData';
import { Link } from 'react-router-dom';
import Deletesection from './Deletesection';
import { AdminContext } from '../Context/DashBoardProvider';
import WelcomeTitle from './WelcomeTitle';

function DocSection() {
    const { toggleDeletepage } = useContext(AdminContext)
    return (
        <>
            <div className='lg:w-[80%] h-[100%] w-[100%]'>
                <WelcomeTitle />
                <div className='w-[100%] h-fit p-2 lg:p-4 flex flex-col items-center gap-2 lg:gap-6'>
                    <div className='w-[100%] flex justify-between'>
                        <h1 className='text-[20px] lg:text-3xl font-semibold'>Document View</h1>
                        <span className='flex items-center justify-center gap-1 bg-[#ee1059] rounded-md font-semibold text-white w-[92px] h-[35px] text-[14px] lg:w-[130px] lg:h-[50px] lg:text-xl'>
                            <FaPlus />
                            <Link to='/addDoc'>Add Docs</Link>
                        </span>
                    </div>
                    <div className='w-[100%] h-[40px] lg:h-[60px] flex items-center gap-2 lg:gap-4'>
                        <div className='w-[67%] h-[35px] lg:w-[100%] lg:h-[50px] flex items-center px-2 gap-1 bg-white overflow-hidden rounded-md'>
                            <IoMdSearch fontSize='22px' color='black' />
                            <input type="text" placeholder='Search Doc...' className='w-[100%] h-[100%] outline-none bg-transparent' />
                        </div>
                        <button className='text-[15px] h-[35px] lg:h-[50px] lg:w-[145px] lg:text-xl px-2 rounded-md font-semibold text-white bg-[#ee1059]'>Search Doc</button>
                    </div>
                    <DocsData />
                </div>
            </div>
            {toggleDeletepage && <Deletesection />}
        </>
    )
}

export default DocSection