import React from "react";
import PossibilityImage from "../../assets/assets/possibility.png";
import "../../index.css";

const Possibility = () => {
   return (
      <div className='gpt3__possibility section__padding md:flex md:relative text-center md:text-start cursor-pointer ' id='possibility'>
         <div className='gpt3__possibility-image '>
            <img className=' w-[700px] h-full md:h-[600px] my-8' src={PossibilityImage} alt='possibilityImage' />
         </div>
         <div className='gpt3__possibility-content md:absolute md:right-[20%] md:top-[30%] '>
            <h4 className=' font-[Manrope] md:font-extrabold text-xl text-[#71E5FF] py-2  '>Request Early Access To Get Started</h4>
            <h1 className='gradient__text  font-[Manrope] md:font-extrabold md:text-4xl py-2 md:w-[500px] '>
               the possibility are beyond your imagination
            </h1>
            <p className='  font-[Manrope]  font-medium text-base text-[#fff] py-2 mb-8 md:w-[600px]'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis nulla ea accusantium iusto, magnam fugiat
               officiis maiores, excepturi explicabo ad modi? Provident officiis unde id pariatur labore quasi.
            </p>
            <h4 className=' font-[Manrope]  font-medium text-base text-[#FF4820]   '>Request Early Access To Get Started</h4>
         </div>
      </div>
   );
};

export default Possibility;
