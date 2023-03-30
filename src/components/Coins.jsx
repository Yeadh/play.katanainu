const Coin = () =>{
    return (
        <>
        {/* coin-area */}
        <section className="coin-area pb-100">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                    <div className="section-title text-center">
                        <h5 className="sub-title">THE ULTIMATE UTILITY</h5>
                        <h2 className="title">$KATA token</h2>
                        {/* <h5 className="sub-title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">THE ULTIMATE UTILITY</h5>
                        <h2 className="title paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">$KATA token</h2> */}
                        <p>Kata tokens are the primary Katana Inu game currency.With it, you can buy in-game items, pay the entry fee to participate in tournaments and get discounts on trading fees.You will also need to hold Kata tokens to earn in the game.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <div className="coin-slider-wrap">
                    <div className="coin-slider-active owl-carousel">
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        {/* <a href="# " className="coin-btn">BUY $KATA</a> */}
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    <div className="coin-slider-item">
                        <h4 className="title">Load Up!</h4>
                        <p>$KATA facilitates the trading of all in-game items within the Katana Inu ecosystem.</p>
                        <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="# " className="btn">BUY $KATA</a></div>
                    </div>
                    </div>
                    <div className="coin-img">
                    <img src="assets/img/images/coin.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            <div className="coin-items-wrapper">
                <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="coin_img">
                                <img src="assets/img/images/coinkata.png" alt="Coin"/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="coin_desc">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="coin-item">
                                                <div className="coin-icon">
                                                    <img src="assets/img/icons/coin_icon01.png" alt="" />
                                                </div>
                                                <div className="coin-content">
                                                    <h5 className="title">NFTs</h5>
                                                        <p>NFTs are an essential part of the Katana Inu ecosystem. People can buy and sell NFTs using Kata-tokens.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="coin-item">
                                                <div className="coin-icon">
                                                    <img src="assets/img/icons/coin_icon02.png" alt="" />
                                                </div>
                                                <div className="coin-content">
                                                    <h5 className="title">Staking Rewards</h5>
                                                    <p>Earn passive income by staking your tokens on <span>staking.katanainu.com</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="coin-item">
                                                <div className="coin-icon">
                                                    <img src="assets/img/icons/coin_icon03.png" alt="" />
                                                </div>
                                                <div className="coin-content">
                                                    <h5 className="title">Tournaments</h5>
                                                        <p>Want to be a part of Global Tournaments?Participate and compete globally.Here, the Winner takes all.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="coin-item">
                                                <div className="coin-icon">
                                                    <img src="assets/img/icons/coin_icon04.png" alt="" />
                                                </div>
                                                <div className="coin-content">
                                                    <h5 className="title">NFT Marketplace</h5>
                                                    <p>Trade and get trading fee discounts with kata tokens</p>
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
        </section>
        {/* coin-area-end */}
        </>
    )
}

export default Coin