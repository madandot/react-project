import React from "react";
import "./index.css";

import { Brand, Cta, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from "./containers";

const App = () => {
   return (
      <div className='gradient__bg  scroll-smooth font-[Manrope, sans-serif]'>
         <div className='bg-gradient-to-r from-[#002853] to-[#040C18]'>
            <Navbar />
            <Header />
         </div>
         <Brand />
         <Whatgpt3 />
         <Features />
         <Possibility />
         <Cta />
         <Blog />
         <Footer />
      </div>
   );
};
export default App;
