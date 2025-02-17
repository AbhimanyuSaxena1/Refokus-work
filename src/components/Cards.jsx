import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl  lg:flex  lg:gap-2 mt-10 px-5  py-10 lg:py-20  lg:mt-20 mx-auto '>
            <Card heading={"Up Next: Culture"} index={false} width={"w-1/3"} heading2={"Who we are"} para={true} button={false}/>
            <Card heading={"Get In Touch"} index={true} width={"w-2/3"} heading2={"Let's get to it together."} para={false} hover={"bg-violet-600"} button={true} />
            
        </div>
    </div>
  )
}

export default Cards