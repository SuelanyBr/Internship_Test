import React, { Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="container text-center d-flex align-items-center ">
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
                                    <a className="size" href="#">English</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Português</a>
                                </li>
                            </ul>
                        </div>
                   <div className="col-md py-5">
                            <ul className="list-group mb-0">
                                <p className="size">COMPANY</p>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Blog</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Team</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Press</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Jobs</a>
                                </li>
                            </ul>
                        </div>
                   <div className="col-md py-5">
                            <ul className="list-group mb-0">
                                <p className="size">SUPPORT</p>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Help center</a>
                                </li>
                                <li className="list-group-item border-0 bg-transparent">
                                    <a className="size" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                   <div className="col-md py-5 container pt-3 bg-transparent">

                            <ul className="list-inline mb-0 text-center">
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="https://www.facebook.com/upplify/">
                                        <i className="fab fa-facebook-f text-primary align-content-center"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="https://twitter.com/upplifyinc">
                                        <i className="fab fa-twitter text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="https://www.instagram.com/upplify/">
                                        <i className="fab fa-instagram text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                                <li className="list-inline-item bg-white rounded-pill btn btn-link">
                                    <a href="https://www.linkedin.com/company/upplify-inc/?originalSubdomain=pt">
                                        <i className="fab fa-linkedin-in text-primary" aria-hidden="true"></i> &nbsp;
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </footer>
        );
    }

}

export default Footer;