import React from "react";
import "../../index.css";
import google from "../../assets/assets/google.png";
import slack from "../../assets/assets/slack.png";
import atlassian from "../../assets/assets/atlassian.png";
import dropbox from "../../assets/assets/dropbox.png";
import shopify from "../../assets/assets/shopify.png";

const Brand = () => {
   return (
      <div className='gtp3__brand section__padding flex flex-wrap justify-center items-center '>
         <div className='flex-1 max-w-[150px] min-w-[120px] flex justify-center items-center py-2 px-2'>
            <img src={google} alt='google' />
         </div>
         <div className='flex-1 max-w-[150px] min-w-[120px] flex justify-center items-center py-2 px-2'>
            <img src={slack} alt='slack' />
         </div>
         <div className='flex-1 max-w-[150px] min-w-[120px] flex justify-center items-center py-2 px-2'>
            <img src={atlassian} alt='atlassian' />
         </div>
         <div className='flex-1 max-w-[150px] min-w-[120px] flex justify-center items-center py-2 px-2'>
            <img src={dropbox} alt='dropbox' />
         </div>
         <div className='flex-1 max-w-[150px] min-w-[120px] flex justify-center items-center py-2 px-2'>
            <img src={shopify} alt='shopify' />
         </div>
      </div>
   );
};

export default Brand;
