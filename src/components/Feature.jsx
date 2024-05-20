import React from "react";

function Feature(props){
    return (
        <div className="one-feature">
        <div className="feature-img-box">
            <img src={props.src} alt="featureimg"/>
        </div>
        <div className="feature-head">
            <h3>{props.head}</h3>
            <p>{props.desc}</p>
        </div>

        </div>

    )
    

}
export default Feature;
