import React from "react";
import ApplyOption from "./ApplyOption";

function Apply(){
    return(
        <section className="apply-box mt-20 p-6">
    <div className="apply-container">
        <div className="apply-head mb-20 w-full flex justify-center">
            <h1 className="text-2xl sm:max-md:text-[25px] md:max-lg:text-[30px] lg:text-[35px] w-3/4 lg:w-1/2   text-center leading-normal font-headingFont">
                Apply On Any Section Or Enable For Whole Page
            </h1>
        </div>
        <div className="apply-option-box flex flex-col md:flex-row">

            <div className="flex-1">
                <div className="p-6 bg-gradient-to-br from-customOptionBox1 to-customOptionBox2  border-t-2 border-customBorderTopColor border-r-2 border-customBorderRightColor  rounded-lg shadow-lg">
                    <div className="rounded-2xl">
                        <ApplyOption 
                            head= "Apply On Section"
                            desc = "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
                            src = "\media\motionarteffect-img11.png"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 md:ml-4 md:mt-20 mt-6">
                <div className="p-6 bg-gradient-to-br from-customOptionBox1 to-customOptionBox2 border-t-2 border-customBorderTopColor border-r-2 border-customBorderRightColor rounded-lg shadow-lg">
                    <div className="rounded-2xl">
                        <ApplyOption 
                            head= "Apply On Page"
                            desc = "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
                            src = "\media\motionarteffect-img10.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    )
}
export default Apply;