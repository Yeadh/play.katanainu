import Slider from "react-slick"
import { useState } from "react"

const Prev = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className + " slick-prev"} onClick={onClick}><img src="assets/img/icons/gallery_left_arrow.png" alt=""/></button>
    )
}

const Next = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className + " slick-next" } onClick={onClick}><img src="assets/img/icons/gallery_right_arrow.png" alt=""/></button>
    )
}

const Gallery = () =>{
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

    const gallery = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        centerMode: true,
        centerPadding: '440px',
        className:'row gallery-active',
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Prev/>,
        nextArrow: <Next/>,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerPadding: '300px',
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '50px',

                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '15px',

                }
            },
        ]
    }


    const gallery_nav = {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        className:'row gallery-nav',
        prevArrow: <Prev/>,
        nextArrow: <Next/>,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    }
    return (
        <>
            {/* gallery-area */}
            <section className="gallery-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="gallery-images text-center">
                            <div className="section-title text-start">
                            <h5 className="sub-title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">KATANA INU</h5>
                            <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">Trailer GAllery</h2>
                            </div>
                            <img className="paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal" src="assets/img/images/gallery_img.png" alt="img" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <Slider {...gallery} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div className="col">
                        <div className="gallery-items">
                            <div className="gallery-thumb">
                            <img src="assets/img/trailers/trailer00.png" alt="img" />
                            <a href="https://www.youtube.com/watch?v=7nykO0FzsVQ" className="popup-video"><i className="fas fa-play" /></a>
                            </div>
                            <div className="gallery-content">
                            <h3 className="title">Gameplay trailer</h3>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="gallery-items">
                            <div className="gallery-thumb">
                            <img src="assets/img/trailers/trailer01.png" alt="img" />
                                    <a href="https://www.youtube.com/watch?v=9c7pDf-WFAk" className="popup-video"><i className="fas fa-play" /></a>
                            </div>
                            <div className="gallery-content">
                            <h3 className="title">Gameplay trailer</h3>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="gallery-items">
                            <div className="gallery-thumb">
                            <img src="assets/img/trailers/trailer02.jpg" alt="img" />
                            <a href="https://www.youtube.com/watch?v=TKKWnzLZMKo" className="popup-video"><i className="fas fa-play" /></a>
                            </div>
                            <div className="gallery-content">
                            <h3 className="title">Gameplay trailer</h3>
                            </div>
                        </div>
                        </div>
                    </Slider>
                </div>
                <div className="gallery-nav-wrap">
                    <div className="container">
                        <Slider {...gallery_nav} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer01.png" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer00.png" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer01.png" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer02.jpg" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer00.png" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="gallery-nav-item">
                                <img src="assets/img/trailers/trailer02.jpg" alt="img" />
                                <h5 className="title">In-game combat</h5>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            {/* gallery-area-end */}
        </>
    )
}

export default Gallery