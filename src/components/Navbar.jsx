import React from 'react';
import Button from './Button';

function Navbar() {
  var buttonText = "Start a Project"
  return (
    <div className='Nav  flex max-w-screen-xl justify-between mx-auto pt-6 items-center text-white p-3 border-b-[2px] border-zinc-800 ]'>
      <div id='left' className='flex  items-center'>
        <div className='flex gap-5 items-center w-20 text-center font-md'>
          <img
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
            className='w-7 h-7' alt="Refokus Logo" />
          <h1 className='font-base text-lg'>Refokus</h1>
        </div>
        <div className='flex gap-20 ml-30'>
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} href='' className='flex gap-1 text-sm items-center font-base'>
              {index === 1 ? <span className='inline-block h-1.5 w-1.5 rounded-full bg-green-500' style={{ boxShadow: '0 0 0.5em #00ff19' }}></span> : null}
              {elem}
              {index === 3 ? <span className='w-[2px] h-10 bg-zinc-800'></span> : null}
            </a>
          ))}
        </div>
      </div>
      <div className='right'>
        <Button value={buttonText}/>
      </div>
    </div>
  );
}

export default Navbar;
