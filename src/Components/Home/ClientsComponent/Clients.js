import React from 'react'
import "./Clients.css"
import client1 from "./img/client1.jpeg";
import client2 from "./img/client2.jpeg";
import client3 from "./img/client3.jpeg";
import client4 from "./img/client4.jpeg";
import client5 from "./img/client5.jpeg";
import client6 from "./img/client6.jpeg";

export default function Clients() {
    return (
        <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client1}
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client2}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client3}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client4}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client5}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={client6}
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}
