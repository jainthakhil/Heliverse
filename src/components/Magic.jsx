import React from "react";

function Magic(){
    return(
        <section className="magic-box flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="magic-text lg:w-1/2 text-center lg:text-left">
    <h2 className="mb-4">
        Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
    </h2>
    <p className="mb-4">
        Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements
    </p>
    <div className="h-auto">
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Purchase From Envato →</a>
    </div>
    </div>

    <div className="magic-img">
        <img src="\media\motionarteffect-img5.png" alt="magic stick"/>
    </div>
</section>


    )
}

export default Magic;