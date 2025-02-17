import React from 'react';
import Button from './Button';
import arqitel from '../assets/videos/arqitel.mp4';
import ttr from '../assets/videos/ttr.mp4';
import yir from '../assets/videos/yir.mp4';
import yahoo from '../assets/videos/yahoo.mp4';
import rainfall from '../assets/videos/rainfall.mp4';

function Product({ live, Case, name, description, move, index,background }) {
  // Define an array of video file paths
  const videos = [arqitel, ttr, yir, yahoo, rainfall];

  return (
    <div onMouseEnter={() => { move(index) }} className={`w-full `}>
      <div className={`mt-5 mr-5 ml-5 mb-5 max-w-screen-xl rounded-xl   lg:rounded-none lg:flex rounded-2xl items-center justify-between ${background} lg:bg-black text-white py-5 lg:py-0 px-10 lg:px-15 mx-auto h-[fit] lg:h-[18vw]`}>

        <div id='left' className='w-fit lg:w-[70vw] text-left lg:text-left font-semibold ml-1 text-2xl border-b-2 lg:border-none  lg:text-6xl'>{name}.</div>
        <video src={videos[index]} autoPlay muted loop className='mt-5 h-[60vw] rounded-xl w-full flex lg:hidden'></video>
        <div id='right' className='w-full mt-5 lg:mt-none lg:w-[30vw]  lg:flex flex-col'>
          <p>{description}</p>
          <div id='btn' className='flex gap-4 items-center justify-center whitespace-nowrap  mt-5'>
            {live ? <Button value={"Live Website"} /> : null}
            {Case ? <Button value={"Case Study"} /> : null}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Product;
