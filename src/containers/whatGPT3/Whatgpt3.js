import React from "react";
import Feature from "../../components/feature/Feature";
import "../../index.css";

const Whatgpt3 = () => {
   return (
      <div className='gpt3__whatgpt3 section__margin ' id='Wgpt3'>
         <div className='gpt3__whatgpt3-feature  '>
            <Feature
               title='What is GPT3'
               text='we so opinion friends me message as delight. whole front do of plate heard oh ought. His defective nor convinced residence own. connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. friendly bachelor entrance to on by.'
            />
         </div>
         <div className='gpt3__whatgpt3-heading md:flex flex-row justify-between items-center md:mt-16 md:mb-8'>
            <h1 className='gradient__text font-extrabold md:max-w-[510px] font-[Manrope] md:text-4xl md:text-start text-center py-4'>
               The possibilities are beyond your imagination
            </h1>
            <p className='font-[Manrope] font-medium md:text-2xl gradient__text cursor-pointer text-center py-4'>Explore The Library</p>
         </div>
         <div className='gpt3__whatgpt3-container flex flex-wrap flex-row mt-8 '>
            <Feature title='ChatBots' text='we so opinion friends me message as delight. whole front do of plate heard oh ought.' />
            <Feature
               title='knowledgeBase'
               text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'
            />
            <Feature
               title='Education'
               text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. '
            />
         </div>
      </div>
   );
};

export default Whatgpt3;
