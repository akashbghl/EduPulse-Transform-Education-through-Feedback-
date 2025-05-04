import React from 'react'

function SimpleCard({cardContent}) {
  return (
    <div className='w-full h-fit p-5  text-center rounded-md shadow border-[#e8e8e8] border-1'>
      {cardContent}
    </div>
  )
}

export default SimpleCard
