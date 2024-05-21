import React from "react";

function Footer(){
    return (
        <section className="footer bg-gradient-to-r from-orange-500 to-indigo-800 py-4 mt-20">
        <div className="footer-box flex justify-between">
        <div className="copyright mx-4">
        <p className="font-paraFont text-customParaColor text-[14px]">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>

        <div className="doc-support">
        <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className="documentation-link mx-4 font-paraFont text-customParaColor text-[14px]">Documentation</a>
        <a href="https://qodematrix.com/docs/motion-art-for-elementor/" className="support-link mx-4 font-paraFont text-customParaColor text-[14px]">Support</a>
        </div>
        </div>
        </section>
    )
}
export default Footer;