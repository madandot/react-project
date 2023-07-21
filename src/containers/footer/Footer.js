import React from "react";
import gpt3Logo from "../../assets/assets/logo.svg";
import { RiArrowUpCircleFill } from "react-icons/ri";

import "../../index.css";
const goToggle = () => {
   window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
};

const Footer = () => {
   return (
      <div className='gpt3__footer section__padding text-white font-[Manrope] cursor-pointer  '>
         <div className='gpt3__footer-header md:font-extrabold md:text-7xl md:max-w-7xl md:mx-auto text-center capitalize mb-8 '>
            <h1 className='gradient__text'>do you want to step in to the future before others</h1>
         </div>
         <div className='gpt3__footer-btn text-center tracking-wider border-2 border-white md:w-fit md:mx-auto py-4 md:px-8 mb-4 rounded-sm'>
            <p>Request Early Access</p>
         </div>
         <div className='gpt3__footer-links md:flex md:justify-around md:flex-row items-center md:h-[500px]'>
            <div className='gpt3__footer-links_logo '>
               <img src={gpt3Logo} alt='logo' />
               <p className='md:w-40 py-8'>K12 183 KD Bangalore, All Rights Reserved </p>
            </div>
            <div className='gpt3__footer-links_div capitalize '>
               <h4 className=' font-extrabold py-4 md:py-8 md:mt-8 md:text-white text-[#FF4820] '>links</h4>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820] '>Overdone</p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>social media</p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>counters</p>
               <p className=' hover:text-[#FF4820]'>contact</p>
            </div>
            <div className='gpt3__footer-links_div capitalize'>
               <h4 className=' font-extrabold  py-4 md:py-8 md:text-white text-[#FF4820] '>company</h4>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>terms & conditions</p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>privacy policy </p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>contact</p>
            </div>
            <div className='gpt3__footer-links_div capitalize'>
               <h4 className=' font-extrabold py-4 md:py-8 md:text-white text-[#FF4820] '>get in touch</h4>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>K12 183 KD Bangalore, All Rights Reserved</p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>085-6713250</p>
               <p className='md:mb-8 mb-4 hover:text-[#FF4820]'>info@payMe.net</p>
            </div>
         </div>
         <div className='md:text-center py-4'>
            <p> &copy; 2023 GPT-3. All Rights Reserved</p>
         </div>
         <div className=' flex justify-end items-end  ' onClick={goToggle}>
            <RiArrowUpCircleFill color='#fff' size={50} />
         </div>
      </div>
   );
};

export default Footer;
