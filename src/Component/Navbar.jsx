import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { AdminContext } from '../Context/DashBoardProvider';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const { togglemode, settogglemode, } = useContext(AdminContext);
    const [togglenavbar, settogglenavbar] = useState(false)

    return (

        <div className='w-[100%] lg:w-[20%] lg:h-[100%] h-[50px] border-r-2'>
            <div className='w-[100%] h-[100%] lg:hidden flex justify-between items-center p-2'>
                <MdOutlineMenu fontSize='30px' onClick={() => settogglenavbar(!togglenavbar)} />
                <div className='flex items-center gap-2'>
                    {togglemode ? <MdDarkMode fontSize='30px' onClick={() => settogglemode(!togglemode)} /> : <MdOutlineLightMode fontSize='30px' onClick={() => settogglemode(!togglemode)} />}
                    <button className='text-[15px] bg-blue-600 p-1 text-white rounded-md font-semibold'>Log out</button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <div className='w-[100%] h-[60px] flex justify-start items-center gap-3 px-3'>
                    <img src="brandlogo.png" alt="" className='w-[45px] h-[45px] object-cover rounded-full' />
                    <h1 className='name text-2xl font-semibold text-[#ee1059]'>Techbro</h1>
                </div>
                <div className='w-[100%] flex flex-col items-start gap-3 p-3 text-2xl font-medium'>
                    <NavLink to='/' className={({ isActive }) => `h-[40px] w-[100%] p-1 rounded-md ${isActive && togglemode ? "bg-black" : ""} ${isActive && !togglemode ? "bg-white" : ""}`}>Docs</NavLink>
                    <NavLink to='/mentorpage' className={({ isActive }) => `h-[40px] w-[100%] p-1 rounded-md ${isActive && togglemode ? "bg-black" : ""} ${isActive && !togglemode ? "bg-white" : ""}`}>Mentors</NavLink>
                    <NavLink to='/roadmapPage' className={({ isActive }) => `h-[40px] w-[100%] p-1 rounded-md ${isActive && togglemode ? "bg-black" : ""} ${isActive && !togglemode ? "bg-white" : ""}`}>RoadMap</NavLink>
                    <NavLink to='/userpage' className={({ isActive }) => `h-[40px] w-[100%] p-1 rounded-md ${isActive && togglemode ? "bg-black" : ""} ${isActive && !togglemode ? "bg-white" : ""}`}>UserProfile</NavLink>
                </div>
            </div>
            <div className={`transform transition-transform duration-300 ease-in-out w-[200px] h-[100%] bg-white bg-opacity-80 fixed top-0 z-20 lg:hidden ${togglenavbar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-full h-[50px] flex justify-start items-center gap-3 px-2'>
                    <img src="brandlogo.png" alt="Brand Logo" className='w-[45px] h-[45px] object-cover rounded-full' />
                    <h1 className='name text-xl font-semibold text-[#ee1059]'>Techbro</h1>
                    <RxCross2 fontSize='25px' className='absolute top-3 right-3 cursor-pointer' onClick={() => settogglenavbar(!togglenavbar)} />
                </div>
                {/* Additional navbar items can go here */}
                <div className='w-[100%] flex flex-col items-start gap-3 p-3 text-2xl font-medium text-black'>
                    <NavLink to='/' className='h-[40px] w-[100%] p-1 rounded-md'>Docs</NavLink>
                    <NavLink to='/mentorpage' className='h-[40px] w-[100%] p-1 rounded-md'>Mentors</NavLink>
                    <NavLink to='/roadmapPage' className='h-[40px] w-[100%] p-1 rounded-md'>RoadMap</NavLink>
                    <NavLink to='/userpage' className='h-[40px] w-[100%] p-1 rounded-md'>UserProfile</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
