import React, { Component} from 'react';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
//import './App.css'

class Resume extends Component {
    render() {
        return (

            <body>
                <div className="container-fluid p-0">

                    <Header/>
                    <p>Resume</p>
                    <Footer/>
                </div>
            </body>

        );
    }
}

export default Resume;