import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({value}) {
  return (
    <div className='w-fit h-10 px-4 py-3 bg-white flex items-center rounded-full text-black'>
        <span className='text-md'>{value}</span>
        <IoIosReturnRight className='ml-4 text-sm' />
    </div>
  )
}

export default Button