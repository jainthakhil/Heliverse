import React from "react";

function Footer(){
    return (
        <section className="footer bg-gradient-to-r from-orange-500 to-indigo-800 py-4 mt-20">
        <div className="footer-box w-full flex flex-col flex-col-reverse lg:flex-row lg:justify-between">
        <div className="copyright flex flex-row p-2 mx-auto lg:mx-4">
        <p className="font-paraFont text-customParaColor text-[14px] text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>

        <div className="doc-support flex flex-row mx-auto lg:mx-4 p-2">
        <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank" className="documentation-link mx-4 font-paraFont text-customParaColor text-[14px]">Documentation</a>
        <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank" className="support-link mx-4 font-paraFont text-customParaColor text-[14px]">Support</a>
        </div> 
        </div>
        </section>
    )
}
export default Footer;