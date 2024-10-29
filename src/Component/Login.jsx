import React from 'react'

function Login() {
    return (
        <div className='w-[100%] h-[100vh] bg-[#f2f2f2] flex justify-center items-center'>
            <div className='w-[300px] lg:w-[400px] h-[250px] bg-[#fff] rounded-md flex flex-col items-center gap-4 p-3 shadow-lg'>
                <h1 className='text-2xl font-semibold mt-2'>Admin Login</h1>
                <input type="text" placeholder='Username' className='w-[100%] h-[40px] px-2 outline-none bg-[#f2f2f2] rounded-md' />
                <input type="password" placeholder='Password' className='w-[100%] h-[40px] px-2 outline-none bg-[#f2f2f2] rounded-md' />
                <button className='w-[100%] h-[40px] font-semibold text-[18px] rounded-md bg-[#ee1059] text-white hover:border-2 hover:border-[#ee1059] hover:bg-transparent hover:text-black'>Log In</button>
            </div>
        </div>
    )
}

export default Login