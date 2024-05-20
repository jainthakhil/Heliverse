import React from "react";

function ApplyOption(props){
    return(
        <div className="apply-option">
            <h2 className="text-3xl mt-6 font-medium">
                {props.head}
                
            </h2>
            <p className="mt-6">
                {props.desc}
            </p>
            <img src={props.src} alt="img" className="mt-6"/>

        </div>
    )
}

export default ApplyOption;