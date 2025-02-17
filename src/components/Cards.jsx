import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl flex gap-2 py-20 mt-20 mx-auto '>
            <Card heading={"Up Next: Culture"} width={"w-1/3"} heading2={"Who we are"} para={true} button={false}/>
            <Card heading={"Get In Touch"} width={"w-2/3"} heading2={"Let's get to it together."} para={false} hover={"bg-violet-600"} button={true} />
            
        </div>
    </div>
  )
}

export default Cards