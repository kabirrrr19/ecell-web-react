import React from 'react'
import "./css/Clients.css"
// import client1 from "./img/clients/client-1.png";
// import client2 from "./img/clients/client-2.png";
// import client3 from "./img/clients/client-3.png";
// import client4 from "./img/clients/client-4.png";
// import client5 from "./img/clients/client-5.png";
// import client6 from "./img/clients/client-6.png";

export default function Clients() {
    return (
        <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src="assets/img/clients-images/client1.jpeg"
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={"assets/img/clients-images/client2.jpeg"}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={"assets/img/clients-images/client3.jpeg"}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={"assets/img/clients-images/client4.jpeg"}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={"assets/img/clients-images/client5.jpeg"}
                        className="img-fluid"
                        alt=""
                    />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                    <img
                        src={"assets/img/clients-images/client6.jpeg"}
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}
