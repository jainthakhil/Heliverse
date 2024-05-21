import React from "react";

function ApplyOption(props){
    return(
        <div className="apply-option">
            <h2 className="text-2xl lg:text-3xl text-center xs:text-left mt-6 font-headingFont">
                {props.head}
                
            </h2>
            <p className="mt-6 font-paraFont text-customParaColor text-center xs:text-left text-[18px]">
                {props.desc}
            </p>
            <img src={props.src} alt="img" className="mt-6"/>

        </div>
    )
}

export default ApplyOption;