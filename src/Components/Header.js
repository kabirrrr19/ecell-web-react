import React from 'react';
import "./css/Header.css";

export default function Header() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><a href="index.html">ECELL VCET</a></h1>
                {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->*/}
 
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li id="firstele" className="active"><a href="index.html">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#team">Team</a></li>
                        <li ><a href="">Drop Down</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
