import React from 'react';
import "./css/Topbar.css";

export default function Navbar() {
    return (
        <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top ">
            <div className="container d-flex">
                <div className="contact-info mr-auto">
                    <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">ecell@vcet.edu.in</a>
                    <i className="icofont-phone"></i> <a href="tel:8805787962">8805787962 </a>
                </div>
                <div className="social-links">
                    <a className="twitter"><i className="icofont-twitter"></i></a>
                    <a className="facebook"><i className="icofont-facebook"></i></a>
                    <a className="instagram"><i className="icofont-instagram"></i></a>
                    <a className="skype"><i className="icofont-skype"></i></a>
                    <a className="linkedin"><i className="icofont-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
