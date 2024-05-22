import React from "react";

function Middle() {
  return (
    <section>
      <div className="middle grid grid-cols-1 md:grid-cols-2 md:grid-cols-[1fr_3fr] mt-8 max-w-7xl mx-auto text-center xs:text-left">
        <div className="left-main w-full flex flex-row justify-center md:justify-start">
          <div className="left-middle  lg:w-3/5 w-auto flex flex-col justify-centre  pt-8 p-4 space-y-4] ">
            <div className="left-top">
              <p className="mb-4 text-transparent bg-gradient-to-r from-customOrange to-customBlue bg-clip-text text-2xl font-paraFont">
                Transform Your Website
              </p>
              
            </div>
            <div className="left-bottom">
              <p className="whitespace-normal text-customHeading text-[18px] xs:text-2xl font-paraFont">
                With Motion Art Effect
              </p>
            </div>
          </div>
        </div>

        <div className="right-middle flex flex-col justify-center md:justify-start md:items-start pt-8 p-8  w-full md:w-3/4">
          <h1 className="lg:text-[55px] md:text-5xl text-[35px] font-medium mb-4 text-customHeading text-center xs:text-left font-headingFont">
            Attract Your Visitors Attention With Colorful
          </h1>
          <h1 className="lg:text-[55px] md:text-5xl text-[35px] font-medium mb-4 text-customBlue md:text-left">
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-customBlue bg-clip-text">
              Motion{" "}
            </span>
            Art Effect
          </h1>
          <p className="md:text-xl  xs:text-left text-xl  text-customHeading text-justify font-paraFont text-customParaColor mt-6">
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
