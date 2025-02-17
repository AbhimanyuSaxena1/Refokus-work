import React from 'react'
import Strip from './Strip'

function Stripes() {
    var data = [
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 52,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 12,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 52,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 12,
        },
      ];
    
  return (
    <div className='w-full border-t-2 border-b-2 border-zinc-800   mt-15 lg:flex'>
        {data.map((elem,index)=>{
            return <Strip key={index} index={index} url={elem.url} number={elem.number} />  // pass props to Strip component  // index is used to give unique key to each element in the array
        })}
    </div>
  )
}

export default Stripes