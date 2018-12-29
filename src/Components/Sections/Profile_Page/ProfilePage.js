import React, { Component } from 'react'
import './ProfilePage.css'

class ProfilePage extends Component {
    render() {
        return (
            <div className="section">
                <div className="container cc-education">
                    <div className="h4 text-center mb-4 title text-dark">Header</div>
                    <p className="h1 text-center card-subtitle text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, mauris vel dapibus lobortis, dolor massa sagittis dolor, ut tempor sapien odio vel nulla.
                    </p>

                    <div className="row">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card border text-secondary text-center">
                                <div className="card-body">
                                    <a className="size-lap"><i className="fas fa-laptop-code"></i></a>
                                    <h6 className="card-subtitle mb-2">Development</h6>
                                    <p className="card-text">Design User Experience, Interface, Custom Website, Logos and Identities, Internet of Things and much more. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card border text-secondary text-center">
                                <div className="card-body">
                                    <a className="size-lap"><i className="fas fa-laptop-code"></i></a>
                                    <h6 className="card-subtitle mb-2">Development</h6>
                                    <p className="card-text">Design User Experience, Interface, Custom Website, Logos and Identities, Internet of Things and much more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card border text-secondary text-center">
                                <div className="card-body">
                                    <a className="size-lap"><i className="fas fa-laptop-code" ></i></a>
                                    <h6 className="card-subtitle mb-2">Development</h6>
                                    <p className="card-text">Design User Experience, Interface, Custom Website, Logos and Identities, Internet of Things and much more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default ProfilePage;
