import React, { useRef, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { FaUpload } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import WelcomeTitle from './WelcomeTitle';

function EditDoc() {
    const [uploadimege, setuploadimege] = useState('')
    const imageref = useRef()

    const uploadimagebtn = () => {
        imageref.current.click()
    }

    const handleImage = (e) => {
        const files = e.target.files[0]
        if (files) {
            const image = URL.createObjectURL(files)
            setuploadimege(image)
        }
    }
    return (
        <div className='lg:w-[80%] h-[100%] w-[100%] flex justify-center items-center lg:flex-col lg:justify-start'>
            <WelcomeTitle />
            <div className='w-[100%] lg:w-[650px] rounded-[15px] shadow-xl p-2 flex flex-col gap-2 bg-white lg:mt-36'>
                <h2 className='font-semibold text-2xl text-black'>Edit Doc</h2>
                <input type="text" placeholder='Edit link...' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <input type="text" placeholder='Edit Document Title' className='w-[100%] h-[40px] lg:h-[60px] px-3 rounded-md outline-none border-2' />
                <div className='w-[100%] h-[150px] border-2 border-black rounded-md'>
                    {uploadimege !== '' ? <img src={uploadimege} alt="" className='w-[100%] h-[100%] object-cover' /> : <div className='w-[100%] h-[100%] flex flex-col justify-center items-center text-black'>
                        <FaUpload fontSize='30px' onClick={() => uploadimagebtn()} />
                        <p>Upload Image</p>
                        <input type="file" ref={imageref} onChange={handleImage} className='hidden' />
                    </div>}
                </div>
                <div className='flex items-center gap-5'>
                    <span className='flex items-center gap-2 font-semibold text-[#ee1059]'>
                        <GoArrowLeft fontSize='25px' />
                        <Link to='/' className='text-xl'>Go Back</Link>
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

export default EditDoc