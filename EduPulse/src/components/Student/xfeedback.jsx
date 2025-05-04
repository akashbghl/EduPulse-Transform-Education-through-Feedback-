import React, { useState } from 'react'
import SimpleCard from '../simple_ReusableComponents/SimpleCard'

function Sfeedback() {
    const [Circle,setCircle]= useState('3');
    return (
        <div>
            {/* main cards */}
            {/* card-1 */}
            <div className='my-6'>
                <SimpleCard
                    cardContent={
                        <div className='text-left'>
                            <h1 className='text-2xl font-semibold'>Recent Lectures</h1>
                            <p className='text-slate-800'>Provide Feedback for your recent lectures</p>
                            <div className='my-4'>
                                <SimpleCard
                                    cardContent={
                                        <div className='flex items-center justify-between text-left'>
                                            <div>
                                                <h1>Advanced Database Systems</h1>
                                                <p className='text-[14px] text-slate-500'>Mr. Kapil Arora , 10:10 AM</p>
                                            </div>
                                            <div>
                                                <button className='bg-black text-white py-2 px-8 cursor-pointer rounded-md hover:bg-gray-800'>Start</button>
                                            </div>
                                        </div>
                                    }
                                /> </div>

                            <div className='my-4'>
                                <SimpleCard
                                    cardContent={
                                        <div className='flex items-center justify-between text-left'>
                                            <div>
                                                <h1>Computer Networks</h1>
                                                <p className='text-[14px] text-slate-500'>Mr. Aakash jain • Yesterday, 2:00 </p>
                                            </div>
                                            <div>
                                                <button className='bg-green-50 text-green-800 text-xs border-1 rounded-2xl px-2 py-1 cursor-text'>✅Completed</button>
                                            </div>
                                        </div>
                                    }
                                /></div>

                            <div className='my-4'>
                                <SimpleCard
                                    cardContent={
                                        <div className='flex items-center justify-between text-left'>
                                            <div>
                                                <h1>Artificial Intelligence</h1>
                                                <p className='text-[14px] text-slate-500'>PMDr. Sarah Ahmed • May 15, 11:30 AM</p>
                                            </div>
                                            <div>
                                                <button className='bg-black text-white py-2 px-8 cursor-pointer rounded-md hover:bg-gray-800'>Start</button>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    }
                /></div>

            {/* card-2 */}
            <div>
                <SimpleCard
                    cardContent={
                        <div className='text-left'>
                            <h1 className='text-2xl font-semibold'>Recent Lectures</h1>
                            <p className='text-slate-800'>Provide Feedback for your recent lectures</p>
                            {/* reactions */}
                            <div className='flex items-center justify-center gap-2 my-5 text-center'>
                                <div className='p-6 border-1 border-slate-500 rounded-md w-[7vw] h-fit'>
                                    <p>😐</p>
                                    <p>Poor</p>
                                </div>
                                <div className='p-6 border-1 border-slate-500 rounded-md w-[7vw] h-fit'>
                                    <p>🙂</p>
                                    <p>Fair</p>
                                </div>
                                <div className='p-6 border-1 border-slate-500 rounded-md w-[7vw] h-fit'>
                                    <p>😄</p>
                                    <p>Good</p>
                                </div>
                                <div className='p-6 border-1 border-slate-500 rounded-md w-[7vw] h-fit'>
                                    <p>🙌</p>
                                    <p>Excellent</p>
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <button className='bg-black text-white py-2 px-8 cursor-pointer rounded-md hover:bg-gray-800'>Submit Quick Feedback</button>
                            </div>
                        </div>
                    }
                /></div>

                {/* card-3 */}
            <div className='my-6'>
                <SimpleCard
                    cardContent={
                        <div className='text-left'>
                            <h1 className='text-2xl font-semibold'>Provide Feedback</h1>
                            <p className='text-slate-800'>Your feedback is anonymous and helps teachers improve their lectures</p>
                            <h1 className='font-semibold mt-4'>Advanced Database Systems - Mr. Kapil Arora</h1>
                            <p className='text-slate-800'>Today,10:00 AM</p>
                            <h1 className='mt-4'>Overall Rating</h1>
                            <div className='flex my-2 gap-2'>
                                <div onClick={()=>setCircle('1')} className={`rounded-4xl border-1 border-slate-800 py-2 px-4 w-fit cursor-pointer ${Circle==='1' ? 'bg-black text-white' : ''}`}>1</div>   
                                <div onClick={()=>setCircle('2')} className={`rounded-4xl border-1 border-slate-800 py-2 px-4 w-fit cursor-pointer ${Circle==='2' ? 'bg-black text-white' : ''}`}>2</div>   
                                <div onClick={()=>setCircle('3')} className={`rounded-4xl border-1 border-slate-800 py-2 px-4 w-fit cursor-pointer ${Circle==='3' ? 'bg-black text-white' : ''}`}>3</div>   
                                <div onClick={()=>setCircle('4')} className={`rounded-4xl border-1 border-slate-800 py-2 px-4 w-fit cursor-pointer ${Circle==='4' ? 'bg-black text-white' : ''}`}>4</div>   
                                <div onClick={()=>setCircle('5')} className={`rounded-4xl border-1 border-slate-800 py-2 px-4 w-fit cursor-pointer ${Circle==='5' ? 'bg-black text-white' : ''}`}>5</div>   
                            </div>

                            
                            
                            {/* progress Bar */}
                            <div>
                                <h1 className='mt-4'>Clarity of Explaination</h1>
                                <input type="range" className='w-full ' />
                            </div>
                            <div>
                                <h1 className='mt-4'>Clarity of Explaination</h1>
                                <input type="range" className='w-full'/>
                            </div>
                            <div>
                                <h1 className='mt-4'>Clarity of Explaination</h1>
                                <input type="range" className='w-full  cursor-pointer' />
                            </div>

                            <div>
                                <h1>Additional Comments</h1>
                                <textarea className='w-full h-50 border-1 border-slate-200 rounded-md'></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <button className='bg-black text-white py-2 px-8 cursor-pointer rounded-md hover:bg-gray-800'>Submit Feedback</button>
                            </div>
                        </div>
                    }
                /></div>

        </div>
    )
}

export default Sfeedback
