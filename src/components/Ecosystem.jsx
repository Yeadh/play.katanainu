import React from "react"
import Slider from "react-slick"
import TabNav from "./tabsnav/TabNav"
import ModelViewer from "./3dmodel/ModelViewer"

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

const Ecosystem = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:'eco-slider row',
        lazyLoad:'ondemand',
        prevArrow: <Prev/>,
	    nextArrow: <Next/>
    }

    const dimondSlider = {
        infinite:false,
        speed:500,
        arrows:false,
        dots:true,
        // fade:true,
        className:'inner-weapon-slider dimond-slider',
        slidesToShow:1,
        slidesToScroll:1,
        vertical: true,
        verticalSwiping: true
    }

    const tabs = [
        { name: "Genesis Takeru", id: 1},
        { name: "Champion NFT", id: 2},
        { name: "Staking NFT", id: 3},
        { name: "Forging NFTs", id: 4},
        { name: "3D Weapons", id: 5}
    ]

    return (
        <>
        {/* unique-area */}
        <section className="unique-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h6 className="sub-title">ECOSYSTEM FEATURES</h6>
                  <h2 className="title">What makes us unique</h2>
                  {/* <h6 className="sub-title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">ECOSYSTEM FEATURES</h6>
                  <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">What makes us unique</h2> */}
                </div>
                <div className="unique-section-btn mb-70">
                  <TabNav datas={tabs} active={1} prefix="tab"/>
                </div>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1-nav">
                    <Slider {...settings}>
                        <div className="eco-item col">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="slider-nft">
                                        <div className="nft-slider">
                                            <div className="nft-item next">
                                                <img src="assets/img/nfts/1.png" alt="" />
                                            </div>
                                            <div className="nft-item prev">
                                                <img src="assets/img/nfts/2.png" alt="" />
                                            </div>
                                            <div className="nft-item active">
                                                <img src="assets/img/nfts/3.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="nfts-contents">
                                        <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                        <ul className="content-lists">
                                            <li>- Get most of the in-game weapons for free.You can claim it here: soon</li>
                                            <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                            <li>- Get a 50% Battlepass discount by connecting with your wallet.</li>
                                            <li>- Tournament Entry Tickets Raffles</li>
                                            <li>- Secret benefits of 10 or more genesis Holders</li>
                                            <li>- Access to closed Beta</li>
                                            <li>- Early Access to all upcoming events</li>
                                        </ul>
                                        <ul className="d-flex align-items-center action-btns">
                                            <li><a href="https://claim.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Claim</a></li>
                                            <li><a href="https://staking.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Stake</a></li>
                                            <li><a href="# " target="_blank" rel="noreferrer" className="btn">Battlepass</a></li>
                                        </ul>
                                            <a href="/nftexplain.pdf" target="_blank" rel="noreferrer" className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                            <span className="mr-3">Read more</span>
                                            <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2-nav">
                    <Slider {...settings}>
                        <div className="eco-item col">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="slider-nft">
                                        <div className="nft-slider">
                                            <div className="nft-item next">
                                                <img src="assets/img/nfts/girl.png" alt="" />
                                            </div>
                                            <div className="nft-item prev">
                                                <img src="assets/img/nfts/girl.png" alt="" />
                                            </div>
                                            <div className="nft-item active">
                                                <img src="assets/img/nfts/girl.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="nfts-contents">
                                        <h2>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                        <ul className="content-lists">
                                            <li>- Forging unique in-game items, click here: soon</li>
                                            <li>- Access to closed beta and test net build with early airdrops for players.</li>
                                            <li>- Whitelist spots for upcoming collections.</li>
                                            <li>- Secret benefits to holders of 30 or more Champion NFTs</li>
                                        </ul>
                                        <ul className="d-flex align-items-center action-btns">
                                            <li><a href="# " className="btn">Forge now</a></li>
                                            <li><a href="https://kainu.io/" target="_blank" rel="noreferrer" className="btn">Buy NFTs</a></li>
                                            <li><a href="# " className="btn">Buy Token</a></li>
                                        </ul>
                                            <a href="/nftexplain.pdf" target="_blank" rel="noreferrer" className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                            <span className="mr-3">Read more</span>
                                                <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3-nav">
                    <Slider {...settings}>
                        <div className="eco-item col">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="slider-nft">
                                        <div className="nft-slider">
                                            <div className="nft-item next">
                                                <img src="assets/img/nfts/1.png" alt="" />
                                            </div>
                                            <div className="nft-item prev">
                                                <img src="assets/img/nfts/2.png" alt="" />
                                            </div>
                                            <div className="nft-item active">
                                                <img src="assets/img/nfts/3.png" alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="nfts-contents mt-150">
                                        <h2>Click here for Staking</h2>
                                        <p>You can stake now $Kata Token with BSC or ETH. The APY is different. You need to connect with the chain you want and it will be automated connect the staking</p>
                                        <ul className="d-flex align-items-center action-btns">
                                            <li><a href="https://staking.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Staking</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab-4-nav">
                    <Slider {...settings}>
                        <div className="eco-item col">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <Slider {...dimondSlider}>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/axe2.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/axe4.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/hlbrd2.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw10.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw11.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw2.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw3.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw1.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/guand1.glb"/>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="nfts-contents mt-140">
                                        <h2>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                        <ul className="d-flex align-items-center">
                                            <li className="btn">Coming Soon
                                                {/* <a href="# " className="btn">Go to Forging</a> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab-5-nav">
                    <Slider {...settings}>
                        <div className="eco-item col">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <Slider {...dimondSlider}>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/axe1.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/axe3.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/hlbrd3.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw12.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw13.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw15.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw6.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/sw5.glb"/>
                                        </div>
                                        <div className="nft-item">
                                            <ModelViewer src="assets/img/weapons3d/guand3.glb"/>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="nfts-contents mt-170">
                                        <h2>3D Weapons NFTs</h2>

                                        <ul className="d-flex align-items-center">
                                            <li><a href="# " className="btn">NFT Marketplace</a></li>
                                            <li><a href="# " className="btn">Mint New NFTs</a></li>
                                            <li><a href="# " className="btn">Partnerprogramm</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
          </div>
        </section>
        {/* unique-area-end */}
        </>
    )
}

export default Ecosystem