import React, { Component} from 'react';

//import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className="container">
                <div className="row text-center d-flex align-items-center">
                    <div className="col-md py-5">
                        <ul className="list-group mb-0">
                            <li className="list-group-item border-0"><img src='./LogoUpplify.jpg' /></li>
                            <li className="list-group-item border-0"> © Upplify 2018 </li>
                            <li className="list-group-item border-0"> Registered </li>
                            <li className="list-group-item border-0"> company in Brazil </li>
                            <li className="list-group-item border-0"> 23.622.284/0001-53 </li>
                            </ul>

                    </div>
                    <div className="col-md py-5">
                        <ul className="list-group mb-0">
                            <p>LANGUAGES</p>
                            <li className="list-group-item border-0">
                                <a className="text-dark" href="English">English</a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="text-dark" href="Pt">Português</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md py-5">
                        <ul className="list-group mb-0">
                            <p>COMPANY</p>
                            <li className="list-group-item border-0">
                                <a className="text-dark" href="Blog">Blog</a>
                            </li>
                            <li className="list-group-item border-0">
                                <a className="text-dark" href="Team">Team</a>
                             </li>
                             <li className="list-group-item border-0">
                                <a className="text-dark" href="Press">Press</a>
                             </li>
                             <li className="list-group-item border-0">
                                <a className="text-dark" href="Jobs">Jobs</a>
                             </li>
                        </ul>
                    </div>
                    <div className="col-md py-5">
                        <ul className="list-group mb-0">
                            <p>SUPPORT</p>
                            <li className="list-group-item border-0">
                                <a className="text-dark" href="Help">Help center</a>
                            </li>
                            <li className="list-group-item border-0">
                                 <a className="text-dark" href="Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md py-5 container pt-3 footer text-black bg-transparent">

                        <ul className="list-inline mb-0">
                            <li className="list-inline-item bg-white rounded-circle">
                                <a href="#">
                                    <i className="fab fa-facebook-f text-primary"></i> &nbsp;
                                </a>
                            </li>
                            <li className="list-inline-item bg-white rounded-circle">
                                <a href="http://twitter.com.br/">
                                    <i className="fab fa-twitter text-primary"></i> &nbsp;
                                </a>
                            </li>
                            <li className="list-inline-item bg-white rounded-circle">
                                <a href="#">
                                    <i className="fab fa-instagram text-primary"></i> &nbsp;
                                </a>
                            </li>
                            <li className="list-inline-item bg-white rounded-circle">
                                <a href="#">
                                    <i className="fab fa-linkedin-in text-primary"></i> &nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }

}

export default Footer;