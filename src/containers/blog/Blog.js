import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "../../index.css";
const Blog = () => {
   return (
      <div className='gpt3__blog section__padding flex flex-col ' id='blog'>
         <div className='gpt3__blog-header w-full text-clip mb-20'>
            <h1 className='gradient__text font-[Manrope] md:font-extrabold md:text-5xl  text-3xl capitalize py-2 md:w-[750px] '>
               a lot is happening, we are blogging about it.
            </h1>
         </div>
         <div className='gpt3__blog-container md:flex md:flex-row   '>
            <div className='gpt3__blog-container-groupA md:flex-[0.75] md:mr-8  shadow-2xl shadow-black'>
               <Article imgUrl={blog01} data='sep 20, 2023' title='Open AI is the future. Let us explore how it is?' />
            </div>
            <div className='gpt3__blog-container-groupB md:flex-1 md:grid md:grid-cols-2 md:gap-8 gap-y-3 shadow-2xl shadow-black '>
               <Article imgUrl={blog02} data='sep 20, 2023' title='Open AI is the future. Let us explore how it is?' />
               <Article imgUrl={blog03} data='sep 20, 2023' title='Open AI is the future. Let us explore how it is?' />
               <Article imgUrl={blog04} data='sep 20, 2023' title='Open AI is the future. Let us explore how it is?' />
               <Article imgUrl={blog05} data='sep 20, 2023' title='Open AI is the future. Let us explore how it is?' />
            </div>
         </div>
      </div>
   );
};

export default Blog;
