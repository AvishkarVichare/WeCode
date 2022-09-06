import React from 'react'
import Quote from './Quote'

const Hero = () => {
  return (
    
    
<div className='px-[120px] py-12'>

<h1 className=' text-yellow-600 font-bold text-center'>
<span className='text-[7rem] text-yellow-500'>
We</span>
<span className='text-[6rem] text-yellow-800'>
Code
</span>
<br/>
<span className='text-[2rem]'>
&#128187;
</span>
    
</h1>
<div className='text-center text-gray-300'>
  <h4 className='text-[20px]'>
  For The Coders 
  </h4>
   
</div>

{/* quote */}
<Quote/>

{/* button  */}
<div className="flex mt-5 group justify-center  w-fit mx-auto items-center flex-col ">


<a className='mx-auto w-fit mt-8 bg-red-500 hover:bg-[#BF3312] text-white p-5 rounded-2xl text-[18px] font-bold ' href="#what">
What We Have For You ?
</a>
<i class="text-[25px] text-yellow-500 text-red-500 ml-3 fa-solid fa-arrow-down relative ease-in duration-300 group-hover:translate-y-3 group-hover:text-[#50DBB4]"></i>
</div>


</div>
  )
}

export default Hero