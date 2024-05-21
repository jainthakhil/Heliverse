import React from "react";
import Review from "./Review";

function Testimonial(){
    return(
        <section className="testimonial mt-20">
  <div className="test-heading flex justify-center mb-4">
    <h1 className="text-2xl font-paraFont">
      Trusted by thousands of users around the world
    </h1>
  </div>
  <div className="reviews-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    
    <div className="flex justify-center p-6 mx-6">
      <Review 
        logoSrc="\media\motionarteffect-img2.png"
        starSrc="\media\motionarteffect-img4.png"
        score={4.5}
        reviews={9}
      />
    </div>
    <div className="flex justify-center">
      <Review 
        logoSrc="\media\motionarteffect-img1.png"
        starSrc="\media\motionarteffect-img4.png"
        score={4.5}
        reviews={9}
      />
    </div>
    <div className="flex justify-center">
      <Review 
        logoSrc="\media\motionarteffect-img3.png"
        starSrc="\media\motionarteffect-img4.png"
        score={4.5}
        reviews={9}
      />
    </div>
  </div>
</section>


      
    )
}
export default Testimonial;