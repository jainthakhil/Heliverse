import React from "react";
import Review from "./Review";

function Testimonial(){
    return(
    <section className="testimonial">
        <div className="test-heading flex justify-center mb-4">
        <h3 className="text-2xl">
            Trusted by thousand of users around the world 
        </h3>

        </div>
        <div className="reviews-box flex justify-between p-4">
        <Review 
            logoSrc="\media\motionarteffect-img2.png"
            starSrc = "\media\motionarteffect-img4.png"
            score = {4.5}
            reviews = {9}
        />
        <Review 
            logoSrc="\media\motionarteffect-img1.png"
            starSrc = "\media\motionarteffect-img4.png"
            score = {4.5}
            reviews = {9}
        />
        <Review 
            logoSrc="\media\motionarteffect-img3.png"
            starSrc = "\media\motionarteffect-img4.png"
            score = {4.5}
            reviews = {9}
        />
        



        </div>
    </section>
    )
}
export default Testimonial;