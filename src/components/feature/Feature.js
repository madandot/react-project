import React from "react";
import "../../index.css";
const Feature = ({ title, text }) => {
   return (
      <div className='gpt3__features-container__feature md:w-full md:flex  justify-between items-start flex-row m-4 '>
         <div className='gpt3__features-container__feature-title flex-1  max-w-[180px] mr-8'>
            <p></p>
            <h1 className='font-[Manrope] font-extrabold text-lg tracking-widest  md:text-start text-white'>{title}</h1>
         </div>
         <div className='gpt3__features-container__feature-text font-[Manrope] flex-[2] md:text-start md:max-w-[890px] flex text-[#81AFDD] font-medium md:text-xl'>
            {text}
         </div>
      </div>
   );
};

export default Feature;
