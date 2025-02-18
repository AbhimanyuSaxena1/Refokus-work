import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({value}) {
  return (
    <div className='w-fit gap-2 lg:w-fit h-8 lg:h-10 px-4 py-3 bg-white flex items-center rounded-full text-black'>
        <span className='text-[3vw] lg:text-sm'>{value}</span>
        <IoIosReturnRight className='lg:ml-4  text-sm' />
    </div>
  )
}

export default Button