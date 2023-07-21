import React from "react";
import Feature from "../../components/feature/Feature";

import "../../index.css";

const featuresData = [
   {
      title: "improving end distrusts instantly",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae molestias quod provident explicabo ut voluptatibus nulla impedit mollitia facere rem.",
   },
   {
      title: "become the tended active",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae molestias quod provident explicabo ut voluptatibus nulla impedit mollitia facere rem.",
   },
   {
      title: "message or am nothing",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae molestias quod provident explicabo ut voluptatibus nulla impedit mollitia facere rem.",
   },
   {
      title: "really boy law county",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae molestias quod provident explicabo ut voluptatibus nulla impedit mollitia facere rem.",
   },
];

const Features = () => {
   return (
      <div className='section__padding w-full  ' id='features'>
         <div className='heading capitalize flex-1 flex justify-start items-start flex-col md:text-left md:mr-20'>
            <h1 className='gradient__text font-[manrope] font-extrabold md:text-4xl text-xl '>
               the future is now and you just need to realize it. step into future today & make it happen
            </h1>
            <p className='font-[manrope] font-medium text-base text-[#FF8A71] mt-8'>request early access to get started</p>
         </div>
         <div className='container  '>
            {featuresData.map((item, index) => (
               <Feature title={item.title} text={item.text} key={item.text} />
            ))}
         </div>
      </div>
   );
};

export default Features;
