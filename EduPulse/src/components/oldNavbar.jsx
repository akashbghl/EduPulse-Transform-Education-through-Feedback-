import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  const location = useLocation();

  const[currentUser,setcurrentUser] = useState('');
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user)
      setcurrentUser(user);
    else
      setcurrentUser(null);
  },[]);

  let isDashboard = currentUser && location.pathname.match('/dashboard');
  
  return (
    <>
      <div className={` bg-white sticky top-0 shadow-2xs gap-40 text-[15px]  h-[10vh] flex  text-xl font-semibold text-zinc-600 items-center ' ${isDashboard?' justify-between w-[82%] ml-auto' : 'w-full justify-around' }`}>
        {
            <div className="logo flex justify-center items-center gap-4">
          <div className='w-[3vw] h-[7vh] overflow-hidden rounded-full '>
            <img className='object-contain object-center' src="images/logo.jpg" alt="" />
          </div>
          <Link to='/' className='text-bold text-2xl text-[#696969]'>EduPulse</Link>
        </div>
        }
        <ul className="menu flex justify-center items-center gap-8">
          <Link to="/Features" className='hover:text-[#0a0a0a]'><li>Features</li></Link>
          <Link to='/pricing' className='hover:text-[#0a0a0a]'><li>Pricing</li></Link>
          <Link to='/About' className='hover:text-[#0a0a0a]'>   <li>About</li></Link>
          <Link to='/Contacts' className='hover:text-[#0a0a0a]'><li>Contact</li></Link>
        </ul>
        { !currentUser?(
          <div className="nav-buttons flex justify-center items-center gap-1">
          <Link to='/Login' className="btn px-5 py-2.5 rounded-md">Log in</Link>
          <Link to="/Signup" className="btn  text-white bg-black px-5 py-2.5 rounded-md font-semibold cursor-pointer flex justify-center items-center hover:bg-slate-700">Sign up</Link>
        </div>
        )
        :
        (
          <div>
            <div className='mr-8 text-4xl p-1 mx-1 border-1 border-[#ebebeb] rounded-4xl shadow hover:bg-slate-50 cursor-pointer'> <CgProfile /> </div>
          </div>
        )
        }
      </div>
    </>
  )
}
