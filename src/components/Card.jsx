import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Card({heading,heading2,width,para,button,hover}) {
  return (
    <div className={`${width}  min-h-[28vw] flex flex-col justify-evenly hover:bg-violet-600  bg-zinc-800 rounded-xl p-5`}>
      <div className="w-full flex flex-col justify-between h-full">
        <div id="top">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-md opacity-75">{heading}</h1>
            <span className="text-2xl ">
              <LuMoveRight />
            </span>
          </div>
          <h2 className="text-4xl mt-6">{heading2}</h2>
        </div>
        {button && (<div id="bottom">
          <h3 className="text-8xl  whitespace-nowrap font-semibold">
            Start a Project
          </h3>
          <button className="px-5 py-2 border-2 border-zinc-200 mt-5 rounded-full">
            Contact us
          </button>
        </div>)}
        {para && (<p className="text-sm opacity-50">Explore what drives our team</p>)}
      </div>
    </div>
  );
}

export default Card;
