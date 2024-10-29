import React, { useContext } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { AdminContext } from '../Context/DashBoardProvider';

function WelcomeTitle() {
    const { togglemode, settogglemode } = useContext(AdminContext)
    return (
        <div className='w-[100%] h-[60px] hidden lg:block'>
            <div className='w-[100%] h-[100%] flex items-center justify-between px-4'>
                <h1 className='text-3xl font-semibold font'>👋 Welcome To Techbro Admin Pannel </h1>
                <div className='flex items-center gap-10'>
                    {togglemode ? <MdDarkMode fontSize='30px' onClick={() => settogglemode(!togglemode)} /> : <MdOutlineLightMode fontSize='30px' onClick={() => settogglemode(!togglemode)} />}
                    <button className='border-2 border-blue-700 px-2 py-1 rounded-md font-semibold text-blue-600'>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeTitle