import React, { useState } from 'react'
import { useState } from 'react';

function Form() {
  const [IosLogIn,setLogin] = useState(true);
  return (
    <div>
        <div className=' flex items-center justify-center mt-20 mb-8 gap-2'>
            <img  className='w-[3vw] h-[7vh] overflow-hidden rounded-full object-contain object-center' src="images/logo.jpg" alt="" />
            <h2 className='font-semibold text-2xl'>EduPulse</h2>    
        </div>
        <div className='h-fit w-[30vw] p-6 shadow border-[#e2e0e0] border-1 rounded-md text-center m-auto'>
            <h2 className='font-bold text-2xl'>{props.title}Welcome back</h2>
            <p className='text-[#67676a]'>{props.baseline}Log in to your account to continue</p>
            <div className='w-full flex p-1 bg-[#e2e0e0] gap-1 my-5 rounded-md' >
              <button className='p-1 bg-white w-full rounded-md'>Student</button>
              <button className='p-1  w-full rounded-md'>Teacher</button>
            </div >
            
        </div>
    </div>
  )
}

export default Form
