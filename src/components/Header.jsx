import React from "react";

function Header(){
    return(
                <section className="header flex justify-between items-center p-4  ">
        <div className="logo">
            <a href="#">
            <img src="/media/MotionArtEffect-logo.png" alt="logo" />

            </a>
            
        </div>
        <div className="purchase-btn">
        <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_black"
   className="lg:block hidden text-black bg-white border border-transparent hover:bg-transparent hover:text-white hover:border-white font-paraFont rounded-lg text-base md:text-lg px-6 py-3 mb-2 transition duration-300 ease-in-out">
   Purchase Now
</a>

        </div>
        </section>
    )
}
export default Header;