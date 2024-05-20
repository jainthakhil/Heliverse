import React from "react";

function Support(){
    return (
        <section className="support p-6 flex justify-center items-center w-full mt-20">

        <div className="support-box bg-gradient-to-b from-customOptionBox1 to-customOptionBox2 border-t-2 border-customBorderTopColor border-r-2 border-customBorderRightColor rounded-lg shadow-lg p-8 w-full flex flex-col">
            <h2 className="text-center text-3xl flex-grow my-6 font-medium">
                Supported by All Popular Browsers
            </h2>
            <p className="text-center my-4 flex-grow">
            Rest assured, Motion Art is designed to be compatible with all major web browsers.
            </p>
            <div className="support-img-box flex justify-center my-6 flex-grow">
                <img src="/media/motionarteffect-img8.png" alt="supportimg"/>
            </div>
        </div>

        </section>
    )
}

export default Support;