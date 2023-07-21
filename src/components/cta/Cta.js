import React from "react";
import "../../index.css";
const Cta = () => {
   return (
      <div
         className='gpt3__cta bg-gradient-to-r from-[#AE67FA] to-[#F49867] md:flex md:justify-between 
        rounded items-center md:max-w-7xl md:mx-auto mx-5 py-8 px-12 '
      >
         <div className='gpt3__cta-content'>
            <p className=' md:text-sm md:font-normal font-[Manrope] text-center md:text-start py-2 md:py-0'>
               Request Early Access To Get Started.
            </p>
            <h1 className=' md:text-2xl capitalize font-bold font-[Manrope] text-center md:text-start py-2 md:py-0'>
               register today & start exploring the endless possibilities.
            </h1>
         </div>
         <div className='py-2 md:py-0'>
            <button className='bg-black font-semibold capitalize py-4 px-12 ml-8 text-white tracking-widest rounded-full' type='button'>
               get start
            </button>
         </div>
      </div>
   );
};

export default Cta;
