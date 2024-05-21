import React from "react";
import Feature from "./Feature";


function Features(){
    return(
        <section className="features flex justify-center mt-8 md:mt-20">
    <div className="features-box flex flex-col items-center">
        <div className="feature-head text-center mb-4 w-full md:w-3/5 px-4"> 
            <h1 className="text-2xl sm:max-md:text-[25px] md:max-lg:text-[30px] lg:text-[35px] font-headingFont leading-normal">
                An All-Round Plugin With Powerful Features
            </h1>
        </div>
        <div className="feature-desc text-center mb-4 w-full md:w-3/5 px-4">
            <p className="font-paraFont text-customParaColor text-[18px]">
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </p>
        </div>

        <div className="feature-item-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    
    <div className="feature-wrapper p-4 h-auto">
        <Feature 
            src="/media/motionarteffect-img9.png"
            head="Light Weight"
            desc="Motion Art for Elementor is designed to be lightweight."
        />
    </div>
    <div className="feature-wrapper  p-4 h-auto">
        <Feature
            src="/media/motionarteffect-img6.png"
            head="100% Responsive"
            desc="Create a consistent visual experience across all devices."
        />
    </div>
    <div className="feature-wrapper p-4 h-auto md:max-lg:col-span-2">
        <Feature 
            src="/media/motionarteffect-img7.png"
            head="User Friendly Interface"
            desc="Ensure a smooth experience for both applicants and administrators."
        />
    </div>
</div>


    </div>
</section>


    )

}

export default Features;