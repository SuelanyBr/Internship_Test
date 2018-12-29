import React, { Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="profile-page sidebar-collapse">
                    <nav className="navbar navbar-expand-md fixed-top navbar-custom">
                        <div className="container">
                            <div className="navbar-translate">
                                <Link className="navbar-brand" to="/" rel="tooltip">LOGOHERE</Link>
                            </div>

                            <button className="navbar-toggler custom-toggler content-center" type="button"
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
                                    <Link className="nav-item nav-link text-right" to="/Definition">Definition</Link>&nbsp;
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        );
    }
}

export default Header;