import React from "react";
import Feature from "./Feature";


function Features(){
    return(
        <section className="features flex justify-center mt-20">
    <div className="features-box flex flex-col items-center">
        <div className="feature-head text-center mb-8 w-1/2"> {/* Added w-1/2 class */}
            <h2 className="text-4xl font-medium">
                An All-Round Plugin With Powerful Features
            </h2>
        </div>
        <div className="feature-desc text-center mb-8 w-1/2"> {/* Added w-1/2 class */}
            <p>
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </p>
        </div>

        <div className="feature-item-box flex flex-wrap justify-between">
    <div className="feature-wrapper w-full sm:w-1/2 lg:w-1/3 p-4 ">
        <Feature 
            src="/media/motionarteffect-img9.png"
            head="Light Weight"
            desc="Motion Art for Elementor is designed to be lightweight."
        />
    </div>
    <div className="feature-wrapper w-full sm:w-1/2 lg:w-1/3 p-4">
        <Feature
            src="/media/motionarteffect-img6.png"
            head="100% Responsive"
            desc="Create a consistent visual experience across all devices."
        />
    </div>
    <div className="feature-wrapper w-full sm:w-1/2 lg:w-1/3 p-4">
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