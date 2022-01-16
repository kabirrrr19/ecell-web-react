import React from 'react';
import "./css/Hero.css";

export default function Hero() {
    return (
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>Welcome to ECELL VCET</h1>
            <h2>
              We are promoting entrepreneuriship to the fostering talents of the
              country.
            </h2>
            <a href="" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>
      </div>
    );
}