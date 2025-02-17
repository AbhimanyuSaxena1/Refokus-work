import React from 'react'
import Button from './Button'

function Product({live, Case, name,description,move,index}) {
  return (
    <div onMouseEnter={()=>{move(index)}} className={`w-full  hover:bg-orange-500`}>
        <div className='max-w-screen-xl flex  rounded-2xl items-center justify-between text-white px-15 mx-auto h-[18vw]'>
        <div id='left' className='w-[70vw] font-semibold text-6xl'>{name}</div>
        <div id='right' className='w-[30vw]'>
                <p>{description}</p>
            <div id='btn' className=' flex gap-4 items-center mt-5 '>
            {live? <Button value={"Live Website"} />:null}           
             {Case ? <Button value={"Case Study"} />:null}

            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Product