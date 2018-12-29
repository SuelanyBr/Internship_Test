import React, { Component} from 'react';

import './Footer.css'

class Footer extends Component {
    render(){
        return(

            <footer className="footer">

                <div className="container-fluid p-0 pt-1">
                    <div className="container-fluid p-0 row text-center d-flex align-items-center ">
                        <div className="col-md py-5">
                            <ul className="list-group mb-0">

                                <li className="list-group-item border-0 bg-transparent size_2"> © Upplify 2018 </li>
                                <li className="list-group-item border-0 bg-transparent size_2"> Registered </li>
                                <li className="list-group-item border-0 bg-transparent size_2"> company in Brazil </li>
                                <li className="list-group-item border-0 bg-transparent size_2"> 23.622.284/0001-53 </li>
                            </ul>

                        </div>
                        <div className="col-md py-5">
                            <ul className="list-group mb-0">
                                <p className="size">LANGUAGES</p>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="English">English</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Pt">Português</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md py-5">
                            <ul className="list-group mb-0">
                                <p className="size">COMPANY</p>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Blog">Blog</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Team">Team</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Press">Press</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Jobs">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md py-5">
                            <ul className="list-group mb-0">
                                <p className="size">SUPPORT</p>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Help">Help center</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md py-5 container pt-3 bg-transparent">

                            <ul className="list-inline mb-0 text-center">
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="#">
                                        <i className="fab fa-facebook-f text-primary align-content-center"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="http://twitter.com.br/">
                                        <i className="fab fa-twitter text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="#">
                                        <i className="fab fa-instagram text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </footer>




        );
    }

}

export default Footer;