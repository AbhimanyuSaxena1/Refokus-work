import React, { useState } from "react";
import { motion, useMotionValueEvent } from "motion/react";
import { useScroll } from "motion/react";
function Work() {

  const [images ,setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "65%",
      left: "57%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "49%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "75%",
      left: "50%",
      isActive: false,
    },
  ])

  const { scrollYProgress } = useScroll();
 
  scrollYProgress.on("change", (data) =>{
  function imageShow(arr)
  {
    setImages((prev) => prev.map((image, index) => arr.indexOf(index) === -1 ? {...image, isActive: false} : {...image, isActive: true}))//+
  }
  
    switch (Math.floor(data*100))
    {
      case 0:
        imageShow([])
        break;
      case 1: 
      imageShow([1])
        break;
      case 2:
        imageShow([1,2])
        break;
      case 3:
        imageShow([1,2,3])
        break;
      case 4:
        imageShow([1,2,3,4])
        break;
      case 5:
        imageShow([1,2,3,4,5])
        break;
      case 6:
        imageShow([1,2,3,4,5,6])
        break;
    }
  });

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl text-center mx-auto lg:relative">
        <h1 className="text-[46vw] lg:text-[33vw] tracking-tight mt-6 lg:tracking-tighter select-none font-regular leading-none">
          work
        </h1>

        <div className="absolute  w-full h-full top-0">
          {images.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                src={elem.url}
                className="work hidden lg:flex absolute  -translate-x-[50%] -translate-y-[50%]  h-30 w-30 lg:h-70 lg:w-70"
                style={{ top: elem.top, left: elem.left,
                 }}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
