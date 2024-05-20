import React from "react";

function Header(){
    return(
                <section className="header flex justify-between items-center p-4">
        <div className="logo">
            <img src="/media/MotionArtEffect-logo.png" alt="logo" />
        </div>
        <div className="purchase-btn">
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            className=" text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Purchase Now
            </a>
        </div>
        </section>
    )
}
export default Header;