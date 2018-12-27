import React, { Component} from 'react';
import './Menu.css'

/**
 * @author: Suelany Brito
 * Class: Menu
 * Definition of menu elements and design
 */

class Menu extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-md navbar-custom">
                    <a className="navbar-brand" href="#">
                        LOGO<colorO className="navbar-custom">HERE</colorO>
                    </a>

                    <button className="navbar-toggler line custom-toggler" type="button" data-toggle="collapse" data-target="#iconMenu"
                            aria-controls="iconMenu" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <section className="collapse navbar-collapse navbar-custom" id="iconMenu">
                        <div className="navbar-nav ml-auto dropdown">
                            <button
                                className="nav-item nav-link btn bg-transparent dropdown-toggle text-left"
                                type="button" id="dropdownHome" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Home
                            </button>&nbsp;
                            <div className="dropdown-menu" aria-labelledby="dropdownHome">
                                <a className="dropdown-item" href="PAGE 1">PAGE 1</a>
                                <a className="dropdown-item" href="PAGE 2">PAGE 2</a>
                            </div>
                            <a className="nav-item nav-link" href="RESUME">Resume</a>&nbsp;
                            <a className="nav-item nav-link" href="PAGE3">Page 3</a>&nbsp;
                        </div>
                    </section>


                </nav>
            </div>
        );
    }
}
export default Menu;
