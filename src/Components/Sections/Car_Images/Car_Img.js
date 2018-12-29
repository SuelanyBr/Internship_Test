import React, { Component} from 'react';

class Car_Img extends Component {
    render() {
        return (
            <div className="container">
                        <div className="row blog">
                            <div className="col-md-12">
                                <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                                    <ol className="carousel-indicators">
                                        <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#blogCarousel" data-slide-to="1"></li>
                                    </ol>

                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(7).jpg">
                                                        </img>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg">
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg">
                                                        </img>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg">
                                                        </img>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg">
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(1).jpg">
                                                        </img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="media">
                                                        <img className="d-flex mr-3"
                                                             src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg">
                                                        </img>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>






        );
    }
}

export default Car_Img;