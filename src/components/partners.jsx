import React from 'react'
// import Ticker from 'react-ticker'
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




function Partners() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: <Prev />,
                    nextArrow: <Next />,
                }
            },
        ]
    }
    return (
        <section className="partners-area social_area">
            <div className="container">



                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center mb-50">
                            <h6 className="sub-title">INFLUENCER/CELEBRITIES</h6>
                            <h2 className="title">PROMOTED KATANA INU</h2>
                        </div>
                    </div>
                </div>
                <div className="team-thumb-wrap pt-60">
                    <div className="row justify-content-center">
                        <div className="single-thumb">
                            <a target="_blank" rel="noreferrer" className='music_img' href="https://twitter.com/PnBRock"><img src="assets/img/team/team_member01.png" alt="" /></a>
                            <div className="team-content text-center pt-20">
                                <h2 className="title">pnbrock</h2>
                            </div>
                            <div className="social d-flex justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/PnBRock"><i className="fa-brands fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC52OnlZcHd_ajoTiqcskrvg"><i className="fa-brands fa-youtube"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pnbrock/"><i className="fa-brands fa-instagram-square"></i></a>
                            </div>
                        </div>

                        <div className="single-thumb">
                            <a target="_blank" rel="noreferrer" className='music_img' href="https://twitter.com/thegame/status/1495507283861778435"><img src="assets/img/team/team_member02.png" alt="" /></a>
                            <div className="team-content text-center pt-20">
                                <h2 className="title">the game</h2>
                            </div>
                            <div className="social d-flex justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/thegame/status/1495507283861778435"><i className="fa-brands fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC3eKKASjWY-WAGRII9iKHsQ"><i className="fa-brands fa-youtube"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/losangelesconfidential/"><i className="fa-brands fa-instagram-square"></i></a>
                            </div>
                        </div>


                        <div className="single-thumb">
                            <a target="_blank" rel="noreferrer" className='music_img' href="https://twitter.com/TPAIN/status/1503890570305052677"><img src="assets/img/team/team_member03.png" alt="" /></a>
                            <div className="team-content text-center pt-20">
                                <h2 className="title">Tpain</h2>
                            </div>
                            <div className="social d-flex justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/TPAIN/status/1503890570305052677"><i className="fa-brands fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCwff7OoSHp3el6GqnSwcSdA"><i className="fa-brands fa-youtube"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tpain/"><i className="fa-brands fa-instagram-square"></i></a>
                            </div>
                        </div>

                        <div className="single-thumb">
                            <a target="_blank" rel="noreferrer" className='music_img' href="https://twitter.com/LifeOfDesiigner/status/1493998851186851841"><img src="assets/img/team/team_member04.png" alt="" /></a>
                            <div className="team-content text-center pt-20">
                                <h2 className="title">Desiigner</h2>
                            </div>
                            <div className="social d-flex justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://twitter.com/LifeOfDesiigner/status/1493998851186851841"><i className="fa-brands fa-twitter"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCAfvFXvjzEupwo2NtyDhRZA"><i className="fa-brands fa-youtube"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lifeofdesiigner/"><i className="fa-brands fa-instagram-square"></i></a>
                            </div>
                        </div>

                        {/* <div className="single-thumb">
                            <a target="_blank" rel="noreferrer" className='music_img' href="https://www.instagram.com/souljaboy/"><img src="assets/img/team/team_member05.png" alt="" /></a>
                            <div className="team-content text-center pt-20">
                                <h2 className="title">Souljaboy</h2>
                            </div>
                            <div className="social d-flex justify-content-center">
                                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCbpqhOEGlI-1lS4GfAeV2vA"><i className="fa-brands fa-youtube"></i></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/souljaboy/"><i className="fa-brands fa-instagram-square"></i></a>
                            </div>
                        </div> */}

                    </div>
                </div>














                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center mb-120 mt-120">
                            <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">PARTNERS &amp; BACKERS</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Slider className="partners-active" {...settings}>
                            <div className="partner-list">
                                <div className="partner-item">
                                    <a href="https://twitter.com/katanainu/status/1470803278644527113" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_01.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://www.newtribe.capital/our-portfolio/" target="_blank" rel="noreferrer"><img src="assets/img/partners/newtribe.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://twitter.com/katanainu/status/1470457827021963283" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_02.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://bcainvestments.com/blog/partnership-katana-inu/" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_03.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/21.jpg" alt="" /></a>
                                </div>
                            </div>
                            <div className="partner-list">
                                <div className="partner-item">
                                    <a href="https://twitter.com/gamezone_app/status/1470447040886984705" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_04.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://www.316vc.com/" target="_blank" rel="noreferrer"><img src="assets/img/partners/316.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://weehodl.com/" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_05.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://twitter.com/paid_network/status/1470759931536035840?lang=en" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_06.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://calvertdrive.ventures/" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_14.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="partner-list">
                                <div className="partner-item">
                                    <a href="https://twitter.com/AussieCapital_/status/1473691388575457289" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_07.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://katanainu.com/" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_08.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://lvtcapital.com/" target="_blank" rel="noreferrer"><img src="assets/img/partners/lvtcap.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://r-930capital.com/portfolio/" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_09.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://twitter.com/GirnasCapital/status/1473041263091924998" target="_blank" rel="noreferrer"><img src="assets/img/partners/girans.jpg" alt="" /></a>
                                </div>



                            </div>
                            <div className="partner-list">
                                <div className="partner-item">
                                    <a href="https://stakez.capital/#projects" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_10.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/metirx.jpg" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://twitter.com/vespertinecap/status/1471540537257648135" target="_blank" rel="noreferrer"><img src="assets/img/partners/vaspertime.jpg" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/masterven.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_11.png" alt="" /></a>
                                </div>


                            </div>
                            <div className="partner-list">
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_13.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://www.bluewheelcapital.com/investments" target="_blank" rel="noreferrer"><img src="assets/img/partners/bluewheel.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="https://twitter.com/Oiggroup/status/1471582570739601408" target="_blank" rel="noreferrer"><img src="assets/img/partners/oig.jpg" alt="" /></a>
                                </div>

                                <div className="partner-item">
                                    <a href="https://mobile.twitter.com/seedthrift/status/1471902193535963138" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_15.png" alt="" /></a>
                                </div>
                                <div className="partner-item">
                                    <a href="/#" target="_blank" rel="noreferrer"><img src="assets/img/partners/partner_12.png" alt="" /></a>
                                </div>

                            </div>
                        </Slider>
                    </div>
                </div>


                <div className="row align-items-center text-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title text-center mb-20 mt-50">
                            <h2 className="title">GAME <span>PARTNERS</span></h2>
                        </div>

                        <div class="token-content text-center mb-50">
                            <div class="token-icon mb-20">
                                <p>Katana Inu has partnered with the following companies.</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="row align-items-center pt-40">

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/ARPC_Logo.svg" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/eb.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market img text-center">
                            <img src="assets/img/announcement/icon-blue.svg" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/ffd.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/FGG_Logo.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/gangs.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/hololoot.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/long1.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/meme-lordz-logo_402x.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/Horizontal Logo 200x88.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/Metarun.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/emblem+white.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/TankMetaverse.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/LOGO11.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/luxpad.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/announcement/cyber.png" alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 mb-30">
                        <div className="nft_market annaounce img text-center">
                            <img src="assets/img/partners/metaverser.png" alt="" />
                        </div>
                    </div>

                </div>


            </div>
        </section>

    )
}

export default Partners