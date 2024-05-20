import React from "react";

function Review(props){
    return(
        <div className="review flex items-center">
    <div className="review-left">
        <img src={props.logoSrc} alt="img"/>
    </div>
    
    <div className="review-right flex flex-col justify-start items-start ml-4">
        <div className="review-star mb-1">
            <img src={props.starSrc} alt="img "/>
        </div>
        <div className="review-score">
            <p className="mb-2">
                {props.score} Score, {props.reviews} Reviews
            </p>
        </div>
    </div>
</div>




    )
}
export default Review;