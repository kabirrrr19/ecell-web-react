import React from 'react'
import "./Hero.css"

function Header() {
  return (
    <div>
      <section id="hero2">
        <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
          <h1 className="mb-4 pb-0">
            The Annual <br /> <span>Marketing</span> Conference
          </h1>
          <p className="mb-4 pb-0">
            10-12 December, Downtown Conference Center, New York
          </p>
          <a
            href="https://youtu.be/L9Shn7_w0BE"
            className="glightbox play-btn mb-4"
          ></a>
          <a href="#about" className="about-btn scrollto">
            About The Event
          </a>
        </div>
      </section>
    </div>
  );
}

export default Header