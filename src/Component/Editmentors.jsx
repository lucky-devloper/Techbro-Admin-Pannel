import React, { useRef, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { FaUpload } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import WelcomeTitle from './WelcomeTitle'

function Editmentors() {
    const [MentorsProfile, setMentorsProfile] = useState('')
    const imageref = useRef()

    const uploadimg = () => {
        imageref.current.click()
    }

    const handleuploadImge = (e) => {
        const files = e.target.files[0]
        if (files) {
            const image = URL.createObjectURL(files)
            setMentorsProfile(image)
        }
    }

    return (
        <div className='lg:w-[80%] h-[100vh] w-[100%] flex justify-center items-center lg:flex-col lg:justify-start'>
            <WelcomeTitle />
            <div className='w-[95%] lg:w-[650px] rounded-[15px] shadow-xl p-2 flex flex-col gap-2 bg-white lg:mt-8'>
                <h2 className='font-semibold text-2xl text-black'>Edit Mentor</h2>
                <input type="text" placeholder='Enter name' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <input type="text" placeholder='Email address' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <input type="number" placeholder='Phone' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <input type="text" placeholder='Qualification' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <input type="text" placeholder='Position' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <div className='w-[100%] h-[100px] border-black border-2 rounded-md'>
                    {MentorsProfile !== '' ? <img src={MentorsProfile} alt="" className='w-[100%] h-[100%] object-cover' /> : <div className='w-[100%] h-[100%] flex justify-center items-center flex-col text-black'>
                        <FaUpload fontSize='20px' onClick={uploadimg} />
                        <p>Upload profile</p>
                        <input type="file" ref={imageref} onChange={handleuploadImge} className='hidden' />
                    </div>}
                </div>
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

export default Editmentors