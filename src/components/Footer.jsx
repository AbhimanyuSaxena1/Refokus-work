import React from 'react';

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto  select-none px-5'>
        <div id="upper" className='lg:flex lg:border-b-2  mb-4 lg:items-center lg:gap-40'>
          <div id='left' className='w-1/2'>
            <h1 className='text-[20vw] lg:text-[13vw] uppercase lg:capitalize tracking-tight font-medium'>
              refokus.
            </h1>
          </div>
          <div id="right" className='flex flex-col-reverse   lg:flex-row gap-10  lg:gap-15 w-full lg:w-1/2'>
            <div id='pt1' className='flex pb-2  pt-2  lg:border-none justify-between  text-center lg:text-left lg:w-1/2 gap-5 lg:gap-10'>
              <div id="social" className='w-1/2 flex flex-col'>
                <h1 className='font-medium opacity-60 mb-5'>Socials</h1>
                {["Instagram", "Twitter", "LinkedIn"].map((elem) => (<a className='mt-2 opacity-60' href=''>{elem}</a>))}
              </div>
              <div id="Sitemap" className='w-1/2  border-l-2  flex flex-col'>
                <h1 className='font-medium opacity-60 mb-5'>Sitemap</h1>
                {["Home", "Work", "Careers", "Contact"].map((elem) => (<a className='mt-2' href=''>{elem}</a>))}
              </div>
            </div>
            <div id="pt2" className='text-center  lg:text-right w-full lg:w-1/2 flex flex-col justify-between items-center   lg:items-end'>
              <p className='font-medium text-md'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
              <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-40 h-20' alt="" />
            </div>
          </div>
        </div>
        <div id="lower" className='flex gap-4 justify-center items-center lg:justify-start lg:gap-10 text-[2vw] lg:text-md opacity-70  pb-5'>
          {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((policy) => (<a href=''>{policy}</a>))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
