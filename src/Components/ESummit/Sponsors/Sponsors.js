import React from 'react'
import"./Sponsors.css"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"
import img7 from "./img/7.png"
import img8 from "./img/8.png"

function Sponsors() {
    return (
      <section id="supporters" className="section-with-bg">

      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>

        <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img3} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img6} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img7} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={img8} className="img-fluid" alt="" />
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Sponsors