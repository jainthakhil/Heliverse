import React from "react";
import Feature from "./Feature";


function Features(){
    return(
        <section className="features">
        <div className="features-box">
            <div className="feature-head">
                <h2>
                An All-Round Plugin With Powerful Features
                </h2>
            </div>
            <div className="feature-desc">
                <p>
                Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
                </p>
            </div>
            <div className="feature-item-box">
            <Feature 
                    src="/media/motionarteffect-img9.png"
                    head = "Light Weight"
                    desc = "Motion Art for Elementor is designed to be lightweight."
            />
            <Feature
                    src="/media/motionarteffect-img6.png"
                    head = "100% Responsive"
                    desc = "Create a consistent visual experience across all devices."
            />
            <Feature 
                    src="/media/motionarteffect-img7.png"
                    head = "User Friendly Interface"
                    desc = "Ensure a smooth experience for both applicants and administrators."
            />
            
            
                
            </div>
        </div>

        </section>
    )

}

export default Features;