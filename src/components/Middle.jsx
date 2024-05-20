import React from "react";

function Middle() {
  return (
    <section className="middle flex mt-8">
  <div className="left-middle flex flex-col items-start pt-8 p-4 space-y-4 w-1/4">
  <div className="left-top">
  <h3 className="mb-1 text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text text-2xl">Transform</h3>
  <h3 className="mb-1 text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text text-2xl">Your Website</h3>
  </div>

  <div className="left-bottom">
  <h3 className="mb-4 text-customHeading text-2xl">With Motion Art Effect</h3>
  </div>
    
    
  </div>
  <div className="right-middle flex flex-col justify-start items-start pt-8 p-8 h-screen w-1/2">
    <h1 className="text-5xl md:text-5xl lg:text-[55px] font-medium mb-4 text-customHeading leading-relaxed text-left">Attract Your Visitors Attention With Colorful</h1>
    <h1 className="text-5xl md:text-5xl lg:text-[55px] font-medium mb-4 text-indigo-800 text-customBlue text-left">
      <span className="text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text">Motion </span>Art Effect
    </h1>
    <p className=" text-1xl text-center text-left text-customHeading text-justify ">
      Unleash the power of creativity with Motion Art for Elementor - your
      ultimate solution for seamlessly integrating captivating animations
      into your website.
    </p>
  </div>
  <div className="w-1/4"></div>
</section>


  );
}

export default Middle;
