import React from 'react';
import Button from './Button';

function Navbar() {
  var buttonText = "Start a Project";
  return (
    <div className='Nav flex  lg:flex w-full lg:max-w-screen-xl justify-between mx-auto pt-6 items-center text-white p-3 border-b-[2px] border-zinc-800'>
      <div id='left' className='items-center lg:flex'>
        <div className='flex lg:flex gap-5 lg:gap-5 lg:items-center w-20 lg:text-center lg:font-md'>
          <img
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
            className='w-7 h-7' alt="Refokus Logo" />
          <h1 className='font-base text-lg'>Refokus</h1>
        </div>
        <div className='mt-4  px-2 lg:px-0 py-2 lg:py-0 lg:mt-0 border-t-2 lg:border-none border-zinc-800  flex lg:flex gap-3 lg:gap-20 ml-0  lg:ml-30'>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} href='' className='flex  gap-1 text-md lg:text-sm items-center font-base'>
              {index === 1 ? <span className='inline-block h-1.5 w-1.5 rounded-full bg-green-500' style={{ boxShadow: '0 0 0.5em #00ff19' }}></span> : null}
              {elem}
              {index === 3 ? <span className='w-[2px] hidden lg:flex lg:h-10 lg:bg-zinc-800'></span> : null}
            </a>
          ))}
        </div>
      </div>
      <div className='right mt-1  whitespace-nowrap lg:text-sm'>
        <Button value={buttonText}/>
      </div>
    </div>
  );
}

export default Navbar;
