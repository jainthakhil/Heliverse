import React from "react";

function Middle() {
  return (
    <section>
      <div className="middle grid grid-cols-1 md:grid-cols-2 md:grid-cols-[1fr_3fr] mt-8 max-w-7xl mx-auto">
        <div className="left-main w-full flex flex-row justify-start">
          <div className="left-middle w-auto flex flex-col justify-centre items-start pt-8 p-4 space-y-4 ">
            <div className="left-top">
              <p className="mb-1 text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text text-2xl font-paraFont">
                Transform
              </p>
              <p className="mb-1 text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text text-2xl font-paraFont">
                Your Website
              </p>
            </div>
            <div className="left-bottom">
              <p className="text-customHeading text-2xl font-paraFont">
                With Motion <br /> Art Effect
              </p>
            </div>
          </div>
        </div>

        <div className="right-middle flex flex-col justify-start items-start pt-8 p-8 ">
          <h1 className="text-5xl md:text-5xl lg:text-[55px] font-medium mb-4 text-customHeading text-left font-headingFont leading-normal">
            Attract Your Visitors Attention With Colorful
          </h1>
          <h1 className="text-5xl md:text-5xl lg:text-[55px] font-medium mb-4 text-indigo-800 text-customBlue text-left">
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-indigo-800 bg-clip-text">
              Motion{" "}
            </span>
            Art Effect
          </h1>
          <p className="text-xl md:text-xl text-center md:text-left text-customHeading text-justify font-paraFont text-customParaColor mt-6">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Middle;
