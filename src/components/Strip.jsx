import React from 'react'

function Strip({number,url,index}) {
  return (
    <div className={`w-[16.66%] ${index === 5 ? "border-r-0": "border-r-2"} min-h-20  items-center px-5 justify-between border-zinc-800 h-fit flex gap-10 gap-10`}>
        <img className='' src={url} alt="" />
        <h1 className='text-lg font-base'>{number}</h1>
    </div>
  )
}

export default Strip