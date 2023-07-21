import { useState } from "react";
import logo from "../../assets/assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "../../index.css";

const Navbar = () => {
   const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <div className='gpt3__navbar md:flex justify-between items-center  md:max-w-7xl md:mx-auto block  md:h-20 h-full  px-4 py-10   '>
         <div className='gpt3__navbar-links md:flex md:flex-1 md:justify-start md:items-center '>
            <div className='gpt3__navbar-links_logo mr-8'>
               <img className=' cursor-pointer  w-16 h-4' src={logo} alt='logo' />
            </div>
            <div
               className={`${
                  toggleMenu ? "block" : "hidden"
               } gpt3__navbar_links_container  min-[880px]:flex md:flex-row font-[Manrope] font-medium
            text-lg text-white capitalize  `}
            >
               <p className='md:mx-4 pb-5 py-7 hover:text-[#ff4820] ease-in-out transition-all'>
                  <a href='#home'>home</a>
               </p>
               <p className='md:mx-4 py-7 hover:text-[#ff4820] ease-in-out transition-all'>
                  <a href='#Wgpt3'>what is GTP?</a>
               </p>
               <p className='md:mx-4 py-7 hover:text-[#ff4820] ease-in-out transition-all'>
                  <a href='#possibility'>open AI</a>
               </p>
               <p className='md:mx-4 py-7 hover:text-[#ff4820] ease-in-out transition-all'>
                  <a href='#features'>case studies</a>
               </p>
               <p className='md:mx-4 py-7 hover:text-[#ff4820] ease-in-out transition-all'>
                  <a href='#blog'>library</a>
               </p>
            </div>
         </div>
         <div
            className={`${toggleMenu ? "block" : "hidden"} gpt3__navbar-sign min-[880px]:flex justify-end items-center font-[Manrope]
             font-medium  text-lg  text-white capitalize  `}
         >
            <p className='md:mx-4 py-7 cursor-pointer hover:text-[#ff4820] ease-in-out transition-all'>
               <a href='./Sign.js'>sign up</a>
            </p>
            <button className='bg-[#ff4820] my-7  py-2 px-4 text-white text-lg font-medium rounded font-[Manrope] capitalize' type='button'>
               sign in
            </button>
         </div>
         <div className='gpt__navbar-menu min-[880px]:hidden block absolute right-5 top-9'>
            {toggleMenu ? (
               <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            ) : (
               <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            )}
         </div>
      </div>
   );
};

export default Navbar;
