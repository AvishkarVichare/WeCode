import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'


const Navbar = () => {

    let locate = useLocation();
    console.log(locate.pathname);

    let navigate = useNavigate();

  return (
    <>
        <div className='px-[120px] py-5 bg-gradient-to-b from-[#000509] to-[#040d1a] text-white '>

            <div className="flex items-center justify-between">
                <div>
                    <h1  className='text-[2rem] font-bold'>
                        <span className='text-yellow-500'  style={{color:"lime"}}>
                            We
                        </span>
                        <span className='text-yellow-800 text-green-800 '>
                            Code
                        </span>
                    </h1>
                </div>
                <ul className='flex gap-12 items-center'>
                    <li  className=''>
                        <Link className='text-[19px]' style={locate.pathname=='/'?{'color':'#fff'}:{'color':'#1C8D73'}} to='/'>
                            Home
                        </Link>
                
                    </li>
                    <li  className=''>
                        <Link className='text-[19px]' style={locate.pathname=='/Community'?{'color':'#fff'}:{'color':'#1C8D73'}} to='/Community'>
                            Community
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='text-[19px]' to='/about' style={locate.pathname=='/about'?{'color':'#fff'}:{'color':'#1C8D73'}}> 
                            About Us
                        </Link>
                    </li>
                    <li className=''>
                        <a className='text-[19px]' href='#' style={locate.pathname=='/contact'?{'color':'#fff'}:{'color':'#1C8D73'}}>
                            Contact
                        </a>
                    </li>
                    <button onClick={()=>{navigate('/signup')}} className=' bg-red-500 hover:bg-[#BF3312] text-white p-2 rounded-2xl text-[19px] font-bold'>
                        Sign Up
                    </button>
                </ul>
            </div>

        </div>
    </>
  )
}

export default Navbar