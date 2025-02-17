import React from 'react';

function Strip({ number, url, index }) {
  return (
    <div className={`w-full lg:w-[16.66%]  ${index === 5 ? "lg:border-r-0" : "lg:border-r-2"} ${(index === 3 || index === 4 || index === 5) ? "hidden lg:flex" : "flex"} min-h-15 lg:min-h-20 items-center px-10 lg:px-5 justify-between border-zinc-800 lg:h-fit gap-10`}>
      <img className='' src={url} alt="" />
      <h1 className='text-xl lg:text-lg font-base'>{number}</h1>
    </div>
  );
}

export default Strip;
