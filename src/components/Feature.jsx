import React from "react";

function Feature(props){
    return (
        <div className="one-feature h-full bg-gradient-to-b from-customOptionBox1 to-customOptionBox2 border-t-2 border-customBorderTopColor border-r-2 border-customBorderRightColor rounded-lg shadow-lg p-4 ">
    <div className="feature-img-box mb-4">
        <img src={props.src} alt="featureimg"/>
    </div>
    <div className="feature-head p-4">
        <h1 className="text-2xl sm:max-md:text-[25px] my-4 font-headingFont">{props.head}</h1>
        <p className="leading-[1.75] font-paraFont text-customParaColor text-[18px]">{props.desc}</p>
    </div>
</div>


    )

}
export default Feature;
