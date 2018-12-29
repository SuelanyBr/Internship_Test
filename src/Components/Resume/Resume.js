import React, { Component} from 'react';
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

class Resume extends Component {
    render() {
        return (

            <body id="top">
                <header>
                <div className="profile-page sidebar-collapse">
                    <nav className="navbar navbar-expand-md fixed-top navbar-custom">
                        <div className="container">
                            <div className="navbar-translate">
                                <Link className="navbar-brand" to="/" rel="tooltip">LOGOHERE</Link>
                            </div>

                            <button className="navbar-toggler line custom-toggler content-center" type="button"
                                    data-toggle="collapse" data-target="#iconMenu"
                                    aria-controls="iconMenu" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end btn" id="iconMenu">
                                <div className="navbar-nav ml-auto dropdown">
                                    <button
                                        className="nav-item nav-link btn bg-transparent dropdown-toggle text-left"
                                        type="button" id="dropdownHome" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </button>&nbsp;
                                    <div className="dropdown-menu" aria-labelledby="dropdownHome">
                                        <a className="dropdown-item text-lef" href="#">PAGE 1</a>
                                        <a className="dropdown-item text-left" href="#">PAGE 2</a>
                                    </div>
                                    <Link className="nav-item nav-link text-left" to="/Resume">Resume</Link>&nbsp;
                                    <Link className="nav-item nav-link text-left" to="/Page3">Page 3</Link>&nbsp;
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

                <div className="page-content">
                    <div>
                        <div className="col-md-6">
                            <div className="card-body text-left mt-5 ml-5">
                                <h5 className="card-title pt-5 text-dark">Maria Suelany Brito da Cruz</h5>
                                <h6 className="card-subtitle mb-2 text-muted text-dark">Student</h6>
                                <p className="mb-0 text-dark"><strong>Major: </strong> Undergraduate student in Computer Science (UFCG)</p>
                                <p className="mb-0 text-dark"><strong>Semester: </strong> 8° </p>
                                <p className="mb-0 text-dark"><strong>Email</strong> Suelanybr@gmail.com</p>
                                <p className="mt-4 pb-5 text-dark"><strong>Resume</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </body>

        );
    }
}

export default Resume;