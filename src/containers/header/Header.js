import React from "react";
import People from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";
import "../../index.css";

import { useState } from "react";

const Header = () => {
   const [email, setEmail] = useState(" ");
   const [message, setMessage] = useState("");
   const handleOnChange = (e) => {
      setEmail(e.target.value);
   };
   const emailValidation = () => {
      const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (regEx.test(email)) {
         setMessage("email valid");
      } else if (!regEx.test(email) && email !== "") {
         setMessage("email is invalid");
      } else {
         setEmail("");
      }
   };
   return (
      <div className='gpt3__header section__padding md:flex max-w-full mx-auto ' id='home'>
         <div className='gpt3__header-content md:flex flex-1 justify-center   flex-col'>
            <h1 className='gradient__text font-[Manrope] md:px-0 md:py-0 md:text-7xl text-xl py-3  text-center md:text-start font-extrabold'>
               let's build something amazing withGPT-3 openAI.
            </h1>
            <p className='font-[Manrope] font-normal text-lg text-[#81AFDD] text-start  '>
               yet bed any for traveling assistance indulgence unpleasing not thoughts al exercise blessing. indulgence way everything joy
               alteration boisterous the attachment. party we years to order allow asked of.
            </p>
            <div className='gpt3__header-content__input md:w-full my-8 md:flex'>
               <input
                  className='bg-[#052D56] md:flex-1 md:rounded-s w-full rounded text-white font-[Manrope] font-medium md:text-xl px-2 outline-none py-4 capitalize '
                  type='email'
                  value={email}
                  placeholder='your email address '
                  onChange={handleOnChange}
               />
               <button
                  className='bg-[#FF4820] md:rounded-r rounded my-2 md:my-0  px-4 py-4  text-white font-[Manrope] font-medium md:text-xl  outline-none  capitalize   '
                  type='button'
                  onClick={emailValidation}
               >
                  Get Started
               </button>
            </div>
            <p className='text-white capitalize'>{message}</p>
            <div className='gpt3__header-content__people md:flex justify-start  mt-8'>
               <img className=' w-60 md:w-48 h-12' src={People} alt='people' />
               <p className='md:ml-4 font-[Manrope] font-medium text-sm text-white pt-4'>
                  1600 people requested access a visit in last 24 hours
               </p>
            </div>
         </div>
         <div className='gpt3__header-image flex-1 flex justify-center items-center '>
            <img className='w-full h-full' src={ai} alt='' />
         </div>
      </div>
   );
};

export default Header;
