import React from "react";
import "../../index.css";

const Article = ({ imgUrl, data, title }) => {
   return (
      <div className='gpt3__blog-container_article w-full h-ful flex flex-col bg-[#031B34] '>
         <div className='gpt3__blog-container_article-image w-full h-full bg-[#031B34]'>
            <img className='' src={imgUrl} alt='blog_image' />
         </div>
         <div className='gpt3__blog-container_article-content flex flex-col justify-between py-4 px-6 h-full'>
            <div>
               <p className='font-[Manrope] font-bold text-xs text-white'>{data}</p>
               <h3 className='font-[Manrope] font-extrabold text-2xl text-white mb-20 cursor-pointer '>{title}</h3>
            </div>
            <p className='font-[Manrope] font-bold text-xs text-white cursor-pointer'>Read Full Article</p>
         </div>
      </div>
   );
};

export default Article;
