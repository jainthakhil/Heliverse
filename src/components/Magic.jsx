import React from "react";

function Magic() {
  return (
    <section className="magic-box grid grid-col-1 md:grid-cols-2  mt-20 p-4">
      
      <div className="magic-text w-full">
        <h1 className="mb-4 text-4xl leading-normal font-headingFont">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="mb-4 font-paraFont text-customParaColor text-[18px]">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements
        </p>
        <div className="h-auto mt-6 flex md:justify-start justify-center">
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            className="block w-72 h-16 bg-gradient-to-r from-customBlue to-customOrange text-white text-center rounded-3xl flex items-center justify-center font-headingFont"
          >
            Purchase From Envato →
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
