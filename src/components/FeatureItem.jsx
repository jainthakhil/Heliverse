import React from "react";

function FeatureItem(props){
    <div className="one-feature">
        <div className="feature-img-box">
            <img src={props.src} alt="feature-img"/>
        </div>
        <div className="feature-head">
            <h3>{props.head}</h3>
            <p>{props.desc}</p>
        </div>

    </div>

}
export default FeatureItem;