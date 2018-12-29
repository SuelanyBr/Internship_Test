import React, { Component} from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header_Pags/Header"

class Page3 extends Component {
  render() {
    return (
        <body>
            <Header/>

                <div className="page-content">
                <div>
                    <div className="col-md-6">
                        <div className="card-body text-left mt-5 ml-5">
                            <h5 className="card-title pt-5 text-dark">Software development</h5>
                            <h6 className="card-subtitle mb-2 text-muted text-dark">Definition</h6>
                            <p className="mb-5 text-dark">Software development is the process of conceiving, specifying, designing, programming,
                                documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks,
                                or other software components. Software development is a process of writing and maintaining the source code,
                                but in a broader sense, it includes all that is involved between the conception of the desired software
                                through to the final manifestation of the software, sometimes in a planned and structured process.
                                Therefore, software development may include research, new development, prototyping, modification, reuse,
                                re-engineering, maintenance, or any other activities that result in software products.</p>

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </body>

    );
  }
}

export default Page3;