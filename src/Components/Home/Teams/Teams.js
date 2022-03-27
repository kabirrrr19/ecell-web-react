import React from 'react'
import "./Teams.css";
import img1 from "./img/team-1.jpg"
import img2 from "./img/team-2.jpg"
import img3 from "./img/team-3.jpg";

export default function Teams() {
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-title">
                <span>Team</span>
                <h2>Team</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                    <div className="member">
                    <img src={img1} alt=""/>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>
                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div className="social">
                        <a href=""><i className="icofont-twitter"></i></a>
                        <a href=""><i className="icofont-facebook"></i></a>
                        <a href=""><i className="icofont-instagram"></i></a>
                        <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                    <div className="member">
                    <img src={img2} alt=""/>
                    <h4>Sarah Jhinson</h4>
                    <span>Product Manager</span>
                    <p>
                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                    </p>
                    <div className="social">
                        <a href=""><i className="icofont-twitter"></i></a>
                        <a href=""><i className="icofont-facebook"></i></a>
                        <a href=""><i className="icofont-instagram"></i></a>
                        <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                    <div className="member">
                    <img src={img3} alt=""/>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>
                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                    </p>
                    <div className="social">
                        <a href=""><i className="icofont-twitter"></i></a>
                        <a href=""><i className="icofont-facebook"></i></a>
                        <a href=""><i className="icofont-instagram"></i></a>
                        <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                </div>

            </div>
        </section>
    )
}
