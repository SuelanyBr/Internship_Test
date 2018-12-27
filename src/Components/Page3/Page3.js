import React, { Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Page3 extends Component {
    render() {
        return (

            <body >
                <div className="container-fluid p-0">

                    <Header/>
                    <p>Page3</p>
                    <Footer/>
                </div>
            </body>

        );
    }
}

export default Page3;