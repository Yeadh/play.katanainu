import Slider from "react-slick"

const Prev = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className } onClick={onClick}><i className="fa-sharp fa-solid fa-angle-left"></i></button>
    )
}

const Next = (props) =>{
    const { className, onClick } = props
    return (
        <button type="button" className={ className } onClick={onClick}><i className="fa-sharp fa-solid fa-angle-right"></i></button>
    )
}

const Banner = () =>{
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className:'row main-slider',
      lazyLoad:'progressive',
      prevArrow: <Prev/>,
      nextArrow: <Next/>
    }
    return (
        <>
          {/* banner-area */}
          <section className="banner-area">
            {/* <div className="banner-bg" style={{backgroundImage:'url(assets/img/banner/banner_bg.jpg)'}}/> */}
            <div className="banner-bg">
              <video src="assets/img/banner/video.mp4" autoPlay muted loop></video>
            </div>
            {/* <img src="assets/img/banner/smoke.png" alt="smoke" className="banner-smoke" /> */}
            <div className="container custom-container">
              {/* <div className="banner-social">
                <ul>
                  <li><a href="https://www.discord.gg/katanainu" target={"_blank"} rel="noreferrer"><i className="fab fa-discord" /></a></li>
                  <li><a href="https://www.youtube.com/c/KatanaInu" target={"_blank"} rel="noreferrer"><i className="fab fa-youtube" /></a></li>
                  <li><a href="https://instagram.com/katanainu" target={"_blank"} rel="noreferrer"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://twitter.com/katanainu" target={"_blank"} rel="noreferrer"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://t.me/katanainu" target={"_blank"} rel="noreferrer"><i className="fab fa-telegram" /></a></li>
                </ul>
              </div> */}
              <Slider {...settings}>
              <div className="col">
                  <div className="banner-wrap">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="banner-content">
                        <img src="assets/img/parallax/logo.png" alt="KatanaInu" className="heading-text wow fadeInDown" data-wow-delay=".2s" data-animation="fadeInDown"/>
                        <h4 className="title wow fadeInUp" data-wow-delay=".5s">play to earn nft pc game</h4>
                        <div className="banner-btn-wrap">
                          <div className="wow fadeInLeft" data-wow-delay=".8s" data-animation="fadeInLeft"><a href="https://nft.katanainu.com/" target="_blank" rel="noreferrer" className="btn">nft pages</a></div>
                          <div className="wow fadeInUp" data-wow-delay=".8s" data-animation="fadeInUp"><a href="# " className="btn">buy token</a></div>
                          <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="https://staking.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Staking Here</a></div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="banner-img">
                        <img src="assets/img/banner/bear.gif" alt="img" />
                      </div>
                    </div> */}
                  </div>
                  {/* <div className="banner-social">
                    <ul>
                      <li><a href="# "><i className="fab fa-discord" /></a></li>
                      <li><a href="# "><i className="fab fa-youtube" /></a></li>
                      <li><a href="# "><i className="fab fa-instagram" /></a></li>
                      <li><a href="# "><i className="fab fa-twitter" /></a></li>
                    </ul>
                  </div> */}
                  {/* <div className="banner-play-icon">
                    <a href="https://www.youtube.com/watch?v=XMTKGEVQJEc" className="popup-video">
                      <img src="assets/img/banner/play_btn.png" alt="" />
                      <span>PLay Trailer</span>
                    </a>
                  </div>
                  <div className="buy-oct-now">
                    <a href="# ">Buy KATA Now</a>
                  </div>
                  <div className="player-name">
                    <h3>SHIBA</h3>
                    <p>The rare NFT Token</p>
                    <p>With Katana</p>
                  </div> */}
                  </div>
                </div>

              </Slider>
            </div>
          </section>
          {/* banner-area-end */}
        </>
    )
}

export default Banner