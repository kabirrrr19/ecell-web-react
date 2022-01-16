import React from 'react'
import "./css/Whyus.css"

export default function Whyus() {
    return (
      <section id="why-us" className="why-us py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="box">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="box">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta
                  veritatis dolor quod et vel dire leno para dest
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="box">
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>
                  Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                  sunt debitis quo vel nam quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
