import React from "react";
import Header from "./Header"; 
import Middle from "./Middle";
import Testimonial from "./Testimonial";
import Magic from "./Magic";
import Apply from "./Application";
import Support from "./Support";
import Features from "./Features";
import Footer from "./Footer";


function App(){
    return(
        <div className="text-customHeading bg-customBackground">
            <Header/>
            <Middle/>
            <Testimonial/>
            <Magic/>
            <Apply/>
            <Support/>
            <Features />
            <Footer />
        </div>
    )
}
export default App;