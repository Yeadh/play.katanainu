import Slider from "react-slick"

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

const Actions = () =>{
    const actions_settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        centerMode: true,
        centerPadding: '540px',
        className:'row action-active',
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
                    centerPadding: '150px',
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerPadding: '15px',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                    centerPadding: '15px',
                }
            },
        ]
    }
    return (
        <>
            {/* action-area */}
            <section className="action-area">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="section-title text-center mb-70">
                        <h5 className="sub-title paroller" data-paroller-factor="-.03" data-paroller-type="foreground" data-paroller-direction="horizontal">FULL OF ACTION</h5>
                                <h2 className="title paroller" data-paroller-factor=".03" data-paroller-type="foreground" data-paroller-direction="horizontal">Our Activity on Events</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container-fluid p-0 fix">
                    <Slider {...actions_settings}>
                        <div className="col">
                        <div className="action-item">
                            <div className="action-thumb">
                                <iframe src={"https://www.youtube.com/embed/zT6neIbpTDw?autoplay=0&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=0&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                            </div>
                            <div className="action-content">
                                    <h3 className="title">Blockchain Economy July 2022 in Istanbul</h3>
                                    <p>The Katana Inu Team was in Istanbul from 27-29 July at Blockchain Summit.We had a great time and meet a lot of potential partners, exchanges and influencers.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="action-item">
                            <div className="action-thumb">
                                <iframe src={"https://www.youtube.com/embed/d0k7ucNOL7A?iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=0&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                            </div>
                            <div className="action-content">
                                    <h3 className="title">World BlockChain summit March 2022 at Atlantis Hotel in Dubai</h3>
                                    <p>The Katana Inu Team was on 23-24 March at World Blockchain Summit in Dubai and 16-17 March 2022 Crypto Expo Dubai.We had a great time and met a lot of potential partnerships and investors.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="action-item">
                            <div className="action-thumb">
                                    <iframe src={"https://www.youtube.com/embed/xSIagXKUq4M?iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=0&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                            </div>
                            <div className="action-content">
                                <h3 className="title">Gitex - Future of Blockchain Oct 2022</h3>
                                    <p>Katana Inu was at GITEX, the biggest Tech event in the world - There was a Hall only for Blockchain companies "Future of Blockchain" and we had a booth there.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                            <div className="action-item">
                                <div className="action-thumb">
                                    <iframe src={"https://www.youtube.com/embed/GZeepdKaLRQ?iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=0&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                                </div>
                                <div className="action-content">
                                    <h3 className="title">Tokyo Game Show 2022 | Katana Inu in Japan | Gamers loved our game</h3>
                                    <p>The Katana Inu Team was from 15-18 August in #Tokyo Japan at Tokyo-Game Show. #tokyogameshow2022 #tgs
                                    We had a great time and the Japanese gamers fell in love with our game.</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            {/* action-area-end */}
        </>
    )
}

export default Actions