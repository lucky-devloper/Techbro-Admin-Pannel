import React, { useContext } from 'react'
import { AdminContext } from '../Context/DashBoardProvider'

function Deletesection() {
    const { toggleDeletepage, settoggleDeletepage } = useContext(AdminContext)
    return (
        <div className='w-full h-[100%] absolute top-0 z-10 backdrop-blur-sm flex justify-center items-center'>
            <div className='lg:w-[600px] h-[150px] bg-gray-100 text-black shadow-lg rounded-md p-4 '>
                <h2 className='text-xl font-semibold'>Confirm Delete</h2>
                <p className='mt-2'>Are you sure want to delete this item?</p>
                <div className='flex justify-end mt-7 gap-2'>
                    <button onClick={() => settoggleDeletepage(!toggleDeletepage)} className='border-2 border-pink-600 rounded-full font-semibold w-[80px] h-[30px]'>Cancel</button>
                    <button onClick={() => settoggleDeletepage(!toggleDeletepage)} className='border-2 border-pink-600 rounded-full font-semibold w-[80px] h-[30px]'>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Deletesection