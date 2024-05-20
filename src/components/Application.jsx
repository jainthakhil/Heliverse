import React from "react";
import ApplyOption from "./ApplyOption";

function Apply(){
    return(
        <section className="apply-box">
            <div className="apply-container">
                <div className="apply-head">
                    <h2>
                    Apply On Any Section Or Enable For Whole Page
                        
                    </h2>
                </div>
                <div className="apply-option-box">
                <ApplyOption 
                    head= "Apply On Section"
                    desc = "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
                    src = "\media\motionarteffect-img10.png"

                 />
                 <ApplyOption 
                    head= "Apply On Page"
                    desc = "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
                    src = "\media\motionarteffect-img11.png"

                 />



                </div>
            </div>
        </section>
    )
}
export default Apply;