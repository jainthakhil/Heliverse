import React from "react";

function Feature(props){
    return (
        <div className="one-feature bg-gradient-to-b from-customOptionBox1 to-customOptionBox2 border-t-2 border-customBorderTopColor border-r-2 border-customBorderRightColor rounded-lg shadow-lg p-4 ">
    <div className="feature-img-box mb-4">
        <img src={props.src} alt="featureimg"/>
    </div>
    <div className="feature-head p-4">
        <h3 className="text-2xl my-4 font-medium">{props.head}</h3>
        <p className="leading-[1.75]">{props.desc}</p>
    </div>
</div>


    )

}
export default Feature;
