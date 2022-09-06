import React from 'react'
import quotes from '../imgs/quotes.png'

const Quote = () => {




  return (

    <div className=' text-[22px] text-center mt-10'>
        <img className='invert h-[25px] mx-auto' src={quotes} alt="" />
        <h4 className=' text-[#a4d6fe]   '>
        “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
        </h4>
        <h4 className='text-[#E8BD0D] font-bold'>
        Author: Martin Fowler
        </h4>
    </div>

  )
}

export default Quote