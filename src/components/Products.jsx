import React, { useState } from 'react'
import Product from './Product'
import { hover, motion } from 'framer-motion'; // Use 'framer-motion' instead of 'motion/react'
import arqitel from '../assets/videos/arqitel.mp4';
import ttr from '../assets/videos/ttr.mp4';
import yir from '../assets/videos/yir.mp4';
import yahoo from '../assets/videos/yahoo.mp4';
import rainfall from '../assets/videos/rainfall.mp4';

function Products() {
    var products = [
        {
          title: "Arqitel",
          description:
            "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
          live: true,
          case: false,
          background:"bg-red-500"
        },
        {
          title: "TTR",
          description:
            "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
          live: true,
          background:"bg-green-500",
          case: false,
        },
        {
          title: "YIR 2022",
          description:
            "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
          live: true,
          case: false,
          background:"bg-red-500"
        },
        {
          title: "Yahoo!",
          description:
            "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
          live: true,
          case: true,
          background:"bg-yellow-800"
        },
        {
          title: "Rainfall",
          description:
            "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
          live: true,
          case: true,
          background:"bg-orange-800"
        },
      ];
      const [pos,setPos] = useState(0);

      const move = (index)=>{
        setPos(index*18);
      }

  return (
    <div className='w-full relative'>
      <div className='bg-black mt-15'>
        {products.map((prod,index) => (
          <Product key={index+1}  move={move} index={index} name={prod.title} description={prod.description} live={prod.live} Case={prod.case} />
        ))}
        <div className='w-full h-full pointer-events-none absolute top-0'>
          <motion.div initial={{y:pos,x:"-50%"}} animate={{y:pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} id="window" className='h-[18vw] w-[30vw] absolute bg-blue-200 left-[45%] overflow-hidden'>
            <motion.div animate={{y:-pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-red-200'>
              <video autoPlay muted loop src={arqitel}></video>
            </motion.div>
            <motion.div animate={{y:-pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-red-300'>
              <video autoPlay muted loop src={ttr}></video>
            </motion.div>
            <motion.div animate={{y:-pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-red-400'>
              <video autoPlay muted loop src={yir}></video>
            </motion.div>
            <motion.div animate={{y:-pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-red-500'>
              <video autoPlay muted loop src={yahoo}></video>
            </motion.div>
            <motion.div animate={{y:-pos + "vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full bg-red-600'>
              <video autoPlay muted loop src={rainfall}></video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Products;
