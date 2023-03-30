import React from 'react'


// import ReactPlayer from 'react-player'

const Downloads = () =>{


    return (
        <>
          {/* download-area */}
          <section className="download-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="newplay_area">
                  <h4 className="new_title">Play Our</h4>
                  <h4 className="new_title_bold">closed beta now!</h4>
                  <h2 className="download-now">Download Now : </h2>
                  <div className="download-btn-wrap">
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/download_btn.png" alt="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/play.png" alt="" />
                    </a>
                    {/* <span>OR</span>
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/xir.png" alt="" />
                    </a> */}
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKIiYSpqNiBotOqkYZMUKqKnizt2_Xm1cLFjkyBH_CcpX3hg/viewform" target="_blank" rel="noreferrer" class="btn">Request a key</a> */}

                  </div>
                  <svg width="620" height="1" viewBox="0 0 620 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="620" height="1" fill="url(#paint0_linear_460_173)" fill-opacity="0.3"/>
                  <defs>
                  <linearGradient id="paint0_linear_460_173" x1="0" y1="1.00813" x2="620" y2="1.00813" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C7C7C7"/>
                  <stop offset="0.520833" stop-color="#C7C7C7"/>
                  <stop offset="1" stop-color="#C7C7C7" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>

                  <div className="server_open">
                      <div className="server_content">
                        <h6 className="desc">The server are always Open between:</h6>
                        <p> 2-4 Pm & 7-10pm CET Time</p>
                      </div>
                      <div className="server_time">
                        <ul>
                          <li>1vs1</li>
                          <li>3vs3</li>
                        </ul>
                      </div>
                  </div>
                  <svg width="620" height="1" viewBox="0 0 620 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="620" height="1" fill="url(#paint0_linear_460_173)" fill-opacity="0.3"/>
                  <defs>
                  <linearGradient id="paint0_linear_460_173" x1="0" y1="1.00813" x2="620" y2="1.00813" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C7C7C7"/>
                  <stop offset="0.520833" stop-color="#C7C7C7"/>
                  <stop offset="1" stop-color="#C7C7C7" stop-opacity="0"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row align-items-end justify-content-center">

              <div className="col-xl-6 col-lg-6">
                <div className="download-content">


                  <div className="need_key">
                    <div className="key_img">
                        <img src="assets/img/images/key.png" alt=""/>
                    </div>
                    <div className="key_content">
                        <h2>For our closed beta you need to have <span className='key_mark'>a whitelist key</span>.</h2>
                    </div>
                  </div>
                  <div className="join_4_key">
                    <a target="_blank" rel="noreferrer" href="https://discord.com/invite/katanainu">You can win a key on our discord join here
                    <i class="fab fa-discord"></i> </a>
                  </div>

                  <div className="dont_worry mb-15">*If you don't have key, no worries read below</div>
                  <p className='hold_key'>hold Tokens or NFTs to participate in our closed beta:
                  In order to get access to the closed beta,</p>

                  <span className='cmark'>you have to fulfil any one of the requirements below: </span>

                <div className="hold_area">
                  <div className="hold500kata">
                    <h3>Hold <span className='cmark' onClick={() => this.handleShow()}>500k</span> $KATA TOKENS</h3>
                  </div>
                  <div className="buy_here">
                    <img src="assets/img/images/ot.png" alt=""/>
                    <p><a target="_blank" rel="noreferrer" href=" ">Buy Here</a></p>
                  </div>
                  <div className="takeru">
                    <h3>Hold<span className='cmark'> 1 Takeru Genesis Collection NFT </span></h3>
                  </div>

                  <div className="buy_here">
                    <img src="assets/img/images/ot.png" alt=""/>
                    <p><a target="_blank" rel="noreferrer" href="https://opensea.io/collection/katanainu-takeru">Buy Here</a></p>
                  </div>
                  <div className="takesword">
                    <h3>Hold one of the below combinations for the <span className='cmark'>GameZone Sword or Bluezilla Axe NFT's:</span></h3>
                  </div>
                  <div className="buy_here">
                    <p className='mt-15'><a target="_blank" rel="noreferrer" href="https://hub.gamezone.io/projects/kata-inu">Buy Here</a></p>
                  </div>
                </div>
                <div className="hero_list">
                  <ul>
                    <li><span>1x </span>Immortal</li>
                    <li><span>1x </span>Legendary</li>
                    <li><span>5x </span>Common</li>
                    <li><span>2x </span>Mystical</li>
                    <li><span>3x </span>Rare</li>
                  </ul>
                </div>










                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="download-img">
                  <img className="paroller" data-paroller-factor=".03" data-paroller-type="foreground" data-paroller-direction="horizontal" src="assets/img/images/download_img.png" alt="img" />
                  <div className="about-video about_video">
                    <iframe src={"https://www.youtube.com/embed/HqUcaLl1EFw?autoplay=1&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                  </div>
                  {/* <div className="player-wrapper">

                    <ReactPlayer
                      className='react-player'
                      url='https://www.youtube.com/watch?v=9c7pDf-WFAk&t=4s'
                      playing='true'
                      width='640'
                      height='360'
                      loop='true'
                      controls='true'
                      // muted='true'
                    />
                  </div> */}
                </div>

              </div>

            </div>





<div className="row justify-content-center">
              <div className="col-md-12">
                <div className="newplay_area mt-50">
                  <h2 className="download-now">Download Now : </h2>
                  <div className="download-btn-wrap">
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/download_btn.png" alt="" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/play.png" alt="" />
                    </a>
                    {/* <span>OR</span>
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/xir.png" alt="" />
                    </a> */}
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKIiYSpqNiBotOqkYZMUKqKnizt2_Xm1cLFjkyBH_CcpX3hg/viewform" target="_blank" rel="noreferrer" class="btn">Request a key</a> */}

                  </div>
                </div>
              </div>
            </div>

























          </div>
          </section>
          {/* download-area-end */}
        </>
    )
}

export default Downloads