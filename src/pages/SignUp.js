import React from 'react'

const SignUp = () => {
  return (
   <>
    <form className='bg-bgcolor h-[100vh] py-20'>
        <div className='flex flex-col items-center justify-center m-auto rounded-xl  w-fit h-fit  gap-6 p-10 shadow-sm ] bg-[#0005094c]'>

    <h1 className='text-livePurple text-[3rem] font-bold '>
        Sign Up 
    </h1>

    <div className='flex items-center gap-2 text-[20px]'>

    <label className='w-[120px] font-bold  text-[#9ec9e2]' htmlFor="name">Full Name:</label>
    <input className='rounded-md p-2 ' type='text' name='name' id='name' />

    </div>

    <div className='flex items-center gap-2 text-[20px]'>

    <label className='w-[120px] font-bold  text-[#9ec9e2]' htmlFor="phone">Mobile No:</label>
    <input className='rounded-md p-2 ' type='number' name='phone' id='phone' />

    </div>

    <div className='flex items-center gap-2 text-[20px]'>

    <label className='w-[120px] font-bold  text-[#9ec9e2]' htmlFor="phone">Email:</label>
    <input className='rounded-md p-2 ' type='email' name='email' id='email' />

    </div>

    <div className='flex items-center gap-2 text-[20px]'>

    <label className='w-[120px] font-bold  text-[#9ec9e2]' htmlFor="phone">Password:</label>
    <input className='rounded-md p-2 ' type='password' name='password' id='password' />

    </div>

    <button className=' bg-red-500 hover:bg-[#BF3312] text-white py-2 px-5 rounded-2xl text-[18px] font-bold'>
        Sign Up
    </button>

    </div>


    </form>
   </>
  )
}

export default SignUp