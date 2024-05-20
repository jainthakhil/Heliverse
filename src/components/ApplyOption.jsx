import React from "react";

function ApplyOption(props){
    return(
        <div className="apply-option">
            <h2>
                {props.head}
                
            </h2>
            <p>
                {props.desc}
            </p>
            <img src={props.src} alt="img"/>

        </div>
    )
}

export default ApplyOption;