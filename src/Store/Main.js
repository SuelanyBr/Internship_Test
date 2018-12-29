import React, { Component} from 'react';
import ProfilePage from "../Components/Sections/Profile_Page/ProfilePage";
import Footer from "../Components/Footer/Footer";
import './Main.css'
import {Link} from "react-router-dom";
import Car_Img from "../Components/Sections/Car_Images/Car_Img";
import Section3 from "../Components/Sections/Section3_Cards/Section3";

class Main extends Component {
    render() {
        return (
            <body id="top">
                <header>
                    <div className="profile-page sidebar-collapse">
                        <nav className="navbar navbar-expand-md fixed-top navbar-transparent bg-primary">
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
                                        className="nav-item nav-link btn bg-transparent dropdown-toggle text-right"
                                        type="button" id="dropdownHome" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </button>&nbsp;
                                        <div className="dropdown-menu" aria-labelledby="dropdownHome">
                                        <a className="dropdown-item text-right" href="#">PAGE 1</a>
                                        <a className="dropdown-item text-right" href="#">PAGE 2</a>
                                    </div>
                                        <Link className="nav-item nav-link text-right" to="/Resume">Resume</Link>&nbsp;
                                        <Link className="nav-item nav-link text-right" to="/Definition">Page 3</Link>&nbsp;
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="page-content">
                    <div>
                        <div className="profile-page">
                        <div className="wrapper">
                            <div className="page-header page-header-small" filter-color="green">

                                <div  data-parallax="true"></div>

                                <div className="container">
                                    <div className="content-center">
                                        <p className="h1">Welcome To Test</p>
                                        <div className="h2 title">SITE TEST UPPLIFY</div>
                                        <p className="category text-white">marketing, development, design.</p>
                                        <button type="button" className="btn btn-success">
                                            Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <ProfilePage/>
                        <Car_Img/>
                        <Section3/>
                    </div>
                </div>
                <Footer/>
            </body>
        );
    }
}

export default Main;