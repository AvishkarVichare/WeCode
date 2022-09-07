import React from 'react'

const InroCard = (props) => {
  return (

    <>
    
    <div className='w-[300px] bg-[#0005094c] hover:bg-[#000000] duration-300 ease-in-out rounded-xl p-10 shadow-sm shadow-[#02233e] cursor-pointer '>

    <h3 className='text-livePurple text-[25px] font-bold text-center'>{props.cardTop}</h3>

    <h4 className='mt-4 text-[20px] text-yellow-500'>
        <span>{props.cardHead1}</span>
        <br/>
        <span className='text-[#1C8D73] font-bold'>
        {props.cardHead2}
        </span>
      
        </h4>
        <p className='text-[#50DBB4] mt-3'>
            {props.description}
        </p>
      <div className="flex">

       <button className='mx-auto w-fit mt-8 bg-red-500 hover:bg-[#BF3312] text-white p-2 rounded-lg text-[15px]'>
            {props.btnMsg}
        </button>
     
      </div>
    </div>

    </>

  )
}

export default InroCard