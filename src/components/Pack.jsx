import React, { Component } from "react";
import Slider from "react-slick";
const Prev = (props) => {
    const { className, onClick } = props
    return (
        <button type="button" className={className + " slick-prev"} onClick={onClick}><img src="assets/img/icons/gallery_left_arrow.png" alt="" /></button>
    )
}

const Next = (props) => {
    const { className, onClick } = props
    return (
        <button type="button" className={className + " slick-next"} onClick={onClick}><img src="assets/img/icons/gallery_right_arrow.png" alt="" /></button>
    )
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <Prev />,
            nextArrow: <Next />,
        };
        return (
            <div className="pack_area">
                <Slider {...settings}>
                    <div>
                        <div className="container">
                            <div className="pack-bg">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="pack-area">
                                            <div className="pack-content">
                                                <div className="pack-pin-text">
                                                    <img src="assets/img/icon/pin.png" alt="pack" />
                                                    <h4>LEGENDARY</h4>
                                                </div>
                                                <div className="pack-main-content">
                                                    <h3>FIGHTERS</h3>
                                                    <h2>500 USDT</h2>
                                                    <p>PC gamers play traditional game several hours every  without earning.</p>
                                                </div>
                                                <div className="pack-btn-wrap">
                                                    <a href="https://kainu.io/" target="_blank" rel="noreferrer" className="btn">mint weapons <i class="fa-solid fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="pack-img">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="single-weapn wpn1">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn1.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="single-weapn wpn2">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn2.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 pr-0">
                                                        <div className="single-weapn wpn3">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn3.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="pack-bg">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="pack-area">
                                            <div className="pack-content">
                                                <div className="pack-pin-text">
                                                    <img src="assets/img/icon/pin.png" alt="pack" />
                                                    <h4>LEGENDARY</h4>
                                                </div>
                                                <div className="pack-main-content">
                                                    <h3>FIGHTERS</h3>
                                                    <h2>500 USDT</h2>
                                                    <p>PC gamers play traditional game several hours every  without earning.</p>
                                                </div>
                                                <div className="pack-btn-wrap">
                                                    <a href="https://kainu.io/" target="_blank" rel="noreferrer" className="btn">mint weapons <i class="fa-solid fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="pack-img">
                                            <div className="container pr-0">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="single-weapn wpn1">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn1.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="single-weapn wpn2">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn2.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 pr-0">
                                                        <div className="single-weapn wpn3">
                                                            <img className="alltuchtopdown" src="assets/img/pack/wpn3.png" alt="Weapons" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}