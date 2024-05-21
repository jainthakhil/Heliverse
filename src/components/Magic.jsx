import React from "react";

function Magic() {
  return (
    <section className="magic-box grid md:grid-cols-2 md:grid-cols-[2fr_1fr]  mt-20 p-6">
      
      <div className="magic-text w-full">
        <h1 className="mb-4 sm:max-md:text-[25px] text-2xl md:max-lg:text-[30px] lg:text-[35px] text-center xs:text-left leading-normal font-headingFont">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="mb-4 font-paraFont text-customParaColor text-[18px] text-center xs:text-left">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements
        </p>
        <div className="h-auto mt-6 flex md:justify-start justify-center">
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank"
            className="block w-3/5 max-w-72 h-16 p-4 bg-gradient-to-r from-customBlue to-customOrange text-white text-center rounded-3xl flex items-center justify-center font-headingFont"
          >
            <p className="m-4">Purchase From Envato →</p>
          </a>
        </div>
      </div>

      <div className="magic-img w-full flex md:justify-end justify-center mt-6">
        <img src="\media\motionarteffect-img5.png" className="w-[248px] h-[246px]"  alt="magic stick" />
      </div>
    </section>
  );
}

export default Magic;
