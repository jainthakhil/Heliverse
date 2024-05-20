import React from "react";

function Header(){
    return(
                <section className="header flex justify-between items-center p-4">
        <div className="logo">
            <img src="/media/MotionArtEffect-logo.png" alt="logo" />
        </div>
        <div className="purchase-btn">
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Purchase Now
            </a>
        </div>
        </section>
    )
}
export default Header;