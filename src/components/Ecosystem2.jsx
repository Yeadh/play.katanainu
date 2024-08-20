import React from "react"
import Slider from "react-slick"
import TabNav from "./tabsnav/TabNav"


const Ecosystem2 = () =>{
    const tabs = [
        { name: "Genesis Takeru", id: 1},
        { name: "Champion NFT", id: 2},
        { name: "Staking NFT", id: 3},
        { name: "Forging NFTs", id: 4},
        { name: "3D Weapons", id: 5}
    ]


    const dimondSlider = {
        infinite:false,
        speed:500,
        arrows:false,
        dots:true,
        // fade:true,
        className:'dimond-slider',
        slidesToShow:1,
        slidesToScroll:1,
        vertical: true,
        verticalSwiping: true
    }

    return (
        <>
        {/* unique-area */}
        <section className="unique-area ecosystem-two">
          <div className="container ecosystem-container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h6 className="sub-title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">ECOSYSTEM FEATURES</h6>
                  <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">What makes us unique</h2>
                </div>
                <div className="unique-section-btn mb-70">
                  <TabNav datas={tabs} active={1} prefix="lokka-tab"/>
                </div>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="lokka-tab-1" role="tabpanel" aria-labelledby="lokka-tab-1-nav">
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
                                {/* <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div> */}
                                <Slider {...dimondSlider}>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text" style={{marginTop:0}}>
                                                    <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                                    <ul className="content-lists">
                                                        <li>- Get most of the 3D Weapons for free. You need to claim here: soon</li>
                                                        <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                                    </ul>
                                                    <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                        <span className="mr-3">Read more</span>
                                                        <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text" style={{marginTop:0}}>
                                                    <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                                    <ul className="content-lists">
                                                        <li>- Get most of the 3D Weapons for free. You need to claim here: soon</li>
                                                        <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                                    </ul>
                                                    <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                        <span className="mr-3">Read more</span>
                                                        <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text" style={{marginTop:0}}>
                                                    <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                                    <ul className="content-lists">
                                                        <li>- Get most of the 3D Weapons for free. You need to claim here: soon</li>
                                                        <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                                    </ul>
                                                    <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                        <span className="mr-3">Read more</span>
                                                        <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text" style={{marginTop:0}}>
                                                    <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                                    <ul className="content-lists">
                                                        <li>- Get most of the 3D Weapons for free. You need to claim here: soon</li>
                                                        <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                                    </ul>
                                                    <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                        <span className="mr-3">Read more</span>
                                                        <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text" style={{marginTop:0}}>
                                                    <h2>Benefits of Genesis NFT Takeru Collection</h2>
                                                    <ul className="content-lists">
                                                        <li>- Get most of the 3D Weapons for free. You need to claim here: soon</li>
                                                        <li>- Stake your NFT and get $Kata rewards or NFTs. Click here: soon</li>
                                                    </ul>
                                                    <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                        <span className="mr-3">Read more</span>
                                                        <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                                {/* <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="lokka-tab-2" role="tabpanel" aria-labelledby="lokka-tab-2-nav">
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
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <Slider {...dimondSlider}>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'24px'}}>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                                <ul className="content-lists">
                                                    <li>- Forging unique in-game items, click here: soon</li>
                                                    <li>- Access to closed beta and test net build with early airdrops for players.</li>

                                                </ul>

                                                <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                    <span className="mr-3">Read more</span>
                                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'24px'}}>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                                <ul className="content-lists">
                                                    <li>- Forging unique in-game items, click here: soon</li>
                                                    <li>- Access to closed beta and test net build with early airdrops for players.</li>

                                                </ul>

                                                <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                    <span className="mr-3">Read more</span>
                                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'24px'}}>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                                <ul className="content-lists">
                                                    <li>- Forging unique in-game items, click here: soon</li>
                                                    <li>- Access to closed beta and test net build with early airdrops for players.</li>

                                                </ul>

                                                <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                    <span className="mr-3">Read more</span>
                                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'24px'}}>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                                <ul className="content-lists">
                                                    <li>- Forging unique in-game items, click here: soon</li>
                                                    <li>- Access to closed beta and test net build with early airdrops for players.</li>

                                                </ul>

                                                <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                    <span className="mr-3">Read more</span>
                                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'24px'}}>You need for Forging at least 1 Champion NFT, and 100$ worth of tokens.</h2>
                                                <ul className="content-lists">
                                                    <li>- Forging unique in-game items, click here: soon</li>
                                                    <li>- Access to closed beta and test net build with early airdrops for players.</li>

                                                </ul>

                                                <a href="# " className="read-more d-flex align-items-center mt-4 btn-sm btn">
                                                    <span className="mr-3">Read more</span>
                                                    <i className="fa-solid fa-arrow-right-long ml-2"></i>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="lokka-tab-3" role="tabpanel" aria-labelledby="lokka-tab-3-nav">
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
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <Slider {...dimondSlider}>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>Click here for Staking</h2>

                                                    <ul className="d-flex align-items-center action-btns">
                                                        <li><a href="# " className="btn">Staking</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <div className="text">
                                                    <h2>Click here for Staking</h2>

                                                    <ul className="d-flex align-items-center action-btns">
                                                        <li><a href="# " className="btn">Staking</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <div className="text">
                                                    <h2>Click here for Staking</h2>

                                                    <ul className="d-flex align-items-center action-btns">
                                                        <li><a href="# " className="btn">Staking</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <div className="text">
                                                    <h2>Click here for Staking</h2>

                                                    <ul className="d-flex align-items-center action-btns">
                                                        <li><a href="# " className="btn">Staking</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <div className="text">
                                                    <h2>Click here for Staking</h2>

                                                    <ul className="d-flex align-items-center action-btns">
                                                        <li><a href="# " className="btn">Staking</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="lokka-tab-4" role="tabpanel" aria-labelledby="lokka-tab-4-nav">
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
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <Slider {...dimondSlider}>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'30px'}}>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                                <ul className="d-flex align-items-center">
                                                    <li><a href="# " className="btn">Go to Forging</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'30px'}}>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                                <ul className="d-flex align-items-center">
                                                    <li><a href="# " className="btn">Go to Forging</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'30px'}}>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                                <ul className="d-flex align-items-center">
                                                    <li><a href="# " className="btn">Go to Forging</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <h2 style={{fontSize:'30px'}}>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Go to Forging</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                <h2 style={{fontSize:'30px'}}>Click here for Forging NFTs(Make here any 3D Weapons as Image)</h2>

                                        <ul className="d-flex align-items-center">
                                            <li><a href="# " className="btn">Go to Forging</a></li>
                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="lokka-tab-5" role="tabpanel" aria-labelledby="lokka-tab-5-nav">
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
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <Slider {...dimondSlider}>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>3D Weapons NFTs</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Marketplace</a></li>
                                                        <li><a href="# " className="btn">Mint</a></li>
                                                        <li><a href="# " className="btn">Partnerprogramm</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>3D Weapons NFTs</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Marketplace</a></li>
                                                        <li><a href="# " className="btn">Mint</a></li>
                                                        <li><a href="# " className="btn">Partnerprogramm</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>3D Weapons NFTs</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Marketplace</a></li>
                                                        <li><a href="# " className="btn">Mint</a></li>
                                                        <li><a href="# " className="btn">Partnerprogramm</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>3D Weapons NFTs</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Marketplace</a></li>
                                                        <li><a href="# " className="btn">Mint</a></li>
                                                        <li><a href="# " className="btn">Partnerprogramm</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="dimond-slide">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="img">
                                                        <img src="assets/img/shapes/dimond_color.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="text">
                                                    <h2>3D Weapons NFTs</h2>

                                                    <ul className="d-flex align-items-center">
                                                        <li><a href="# " className="btn">Marketplace</a></li>
                                                        <li><a href="# " className="btn">Mint</a></li>
                                                        <li><a href="# " className="btn">Partnerprogramm</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                                <div className="dimond-img" style={{ transform: 'translateX(23%)'}}>
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                                <div className="dimond-img">
                                    <img src="assets/img/shapes/dimond_grey.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        {/* unique-area-end */}
        </>
    )
}

export default Ecosystem2