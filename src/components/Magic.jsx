import React from "react";

function Magic(){
    return(
        <section className="magic-box flex flex-col lg:flex-row items-center justify-between gap-8 mt-20 p-4">
    <div className="magic-text lg:w-1/2 text-center lg:text-left">
    <h2 className="mb-4 text-4xl leading-[1.75] font-medium">
        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
    </h2>
    <p className="mb-4">
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements
    </p>
    <div className="h-auto mt-6">
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="block w-72 h-16 bg-gradient-to-r from-customBlue to-customOrange text-white text-center font-medium rounded-3xl flex items-center justify-center">Purchase From Envato →</a>
    </div>
    </div>

    <div className="magic-img">
        <img src="\media\motionarteffect-img5.png" alt="magic stick"/>
    </div>
</section>


    )
}

export default Magic;