import React from "react";
import { Modal } from "react-bootstrap";
import BgVideo from "../video/bannerbg.mp4";
class Downloads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "token",
        },
      },
    });
    console.log(window.dotq);
  }

  fireMintButton() {
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "mint",
        },
      },
    });

    console.log(window.dotq);
  }

  openModal() {
    this.setState({ modal: true });
    window.dotq = window.dotq || [];
    window.dotq.push({
      projectId: "10000",
      properties: {
        pixelId: "10176003",
        userEmail: "<email_address>",
        qstrings: {
          et: "custom",
          ec: "discord",
        },
      },
    });
    console.log(window.dotq);
  }
  render() {
    return (
      <section className="download-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="newplay_area">
                <h4 className="new_title">Play Our</h4>
                <h4 className="new_title_bold">Pre beta now!</h4>
                <h2 className="download-now">Download Now: </h2>
                <div className="download-btn-wrap">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://download.katanainu.com/Katanainu-launcher.exe"
                  >
                    <img src="assets/img/images/download_btn.png" alt="" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://download.katanainu.com/Katanainu-launcher.exe"
                  >
                    <img src="assets/img/images/play.png" alt="" />
                  </a>
                  <a
                    className="white"
                    target="_blank"
                    rel="noreferrer"
                    href="https://download.katanainu.com/Katanainu-launcher.exe"
                  >
                    Download Directly
                  </a>
                </div>
                <svg
                  width="620"
                  height="1"
                  viewBox="0 0 620 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="620"
                    height="1"
                    fill="url(#paint0_linear_460_173)"
                    fill-opacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_460_173"
                      x1="0"
                      y1="1.00813"
                      x2="620"
                      y2="1.00813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C7C7C7" />
                      <stop offset="0.520833" stop-color="#C7C7C7" />
                      <stop offset="1" stop-color="#C7C7C7" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="server_open text-center">
                  <div className="server-text">
                    <h4>THE SERVERS ARE ALWAYS OPEN BETWEEN:</h4>
                    <span>2-10PM CET</span>
                  </div>
                </div>
                <div className="server_open text-center mt-20">
                  <div className="server-text">
                    <h4>PLAY MODES AVAILABLE:</h4>
                  </div>
                  <div className="server_time">
                    <ul>
                      <li>1vs1</li>
                      <li>3vs3</li>
                    </ul>
                  </div>
                </div>
                <svg
                  width="620"
                  height="1"
                  viewBox="0 0 620 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="620"
                    height="1"
                    fill="url(#paint0_linear_460_173)"
                    fill-opacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_460_173"
                      x1="0"
                      y1="1.00813"
                      x2="620"
                      y2="1.00813"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C7C7C7" />
                      <stop offset="0.520833" stop-color="#C7C7C7" />
                      <stop offset="1" stop-color="#C7C7C7" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <Modal
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Body className="p-5">
                <p>
                  <a
                    className="btn d-block btn-primary"
                    href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Uniswap
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block"
                    href="https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Pancake Swap
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block btn-success"
                    href="https://www.bitmart.com/trade/en?symbol=KATA_USDT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Bitmart
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block btn-danger"
                    href="https://www.hotbit.io/exchange?symbol=KATA_USDT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Hotbit
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block btn-secondary"
                    href="https://www.probit.com/app/exchange/KATA-USDT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Probit
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block btn-secondary"
                    href="https://www.digifinex.com/en-ww/trade/USDT/KATA"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DIGIFINEX
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block btn-secondary"
                    href="https://www.mexc.com/de-DE/exchange/KATA_USDT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    MEXC
                  </a>
                </p>
              </Modal.Body>
            </Modal>
            <Modal
              show={this.state.modal}
              onHide={() => this.setState({ modal: false })}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Body className="p-5">
                <p>
                  <a
                    className="btn d-block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/katanainu"
                    style={{ background: "#0077b5" }}
                  >
                    <i
                      className="fab fa-telegram"
                      style={{ marginRight: "15px" }}
                    ></i>
                    <span>Telegram</span>
                  </a>
                </p>
                <p>
                  <a
                    className="btn d-block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.discord.gg/katanainu"
                    style={{ background: "#FF4301" }}
                  >
                    <i
                      className="fab fa-discord"
                      style={{ marginRight: "15px" }}
                    ></i>
                    <span>Discord</span>
                  </a>
                </p>
              </Modal.Body>
            </Modal>
          </div>
          <div className="row align-items-end justify-content-center d-none">
            <div className="col-xl-6 col-lg-6">
              <div className="download-content">
                <div className="need_key">
                  <div className="key_img">
                    <img src="assets/img/images/key.png" alt="" />
                  </div>
                  <div className="key_content">
                    <h2>
                      Don’t have{" "}
                      <span className="key_mark">an Access Key?</span> Sign up
                      to our newsletter & join our Discord to stay updated on
                      opportunities to win one!
                    </h2>
                  </div>
                </div>
                <div className="join_4_key">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.com/invite/katanainu"
                  >
                    Win a key by joining our Discord
                    <i class="fab fa-discord"></i>{" "}
                  </a>
                </div>

                <p className="hold_key">
                 You can access Closed Beta without an Access Key if you:
                </p>

                {/* <span className='cmark'>You have to : </span> */}

                <div className="hold_area">
                  <div
                    className="hold500kata"
                    onClick={() => this.handleShow()}
                  >
                    <h3>
                      Hold <span className="cmark">30k</span> $KATA TOKENS
                    </h3>
                  </div>
                  <div class="buy_here">
                    <img src="assets/img/images/ot.png" alt="" />
                  </div>

                  <div className="takeru">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://opensea.io/collection/katanainu-takeru"
                    >
                      <h3>
                        Hold
                        <span className="cmark">
                          {" "}
                          1 Takeru Genesis Collection NFT{" "}
                        </span>
                      </h3>
                    </a>
                  </div>
                  <div class="buy_here">
                    <img src="assets/img/images/ot.png" alt="" />
                  </div>

                  <div className="takesword">
                    <h3>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://hub.gamezone.io/projects/kata-inu"
                      >
                        Hold one of the below combinations for the{" "}
                        <span className="cmark">
                          GameZone Sword or Bluezilla Axe NFT's:
                        </span>
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="hero_list">
                  <ul>
                    <li>
                      <span>1x </span>Immortal
                    </li>
                    <li>
                      <span>1x </span>Legendary
                    </li>
                    <li>
                      <span>1x </span>Common
                    </li>
                    <li>
                      <span>1x </span>Mystical
                    </li>
                    <li>
                      <span>1x </span>Rare
                    </li>
                    <li>
                      <span>1x </span>Rare
                    </li>
                    <li>
                      <span>1x </span>Forge
                    </li>
                    <li>
                      <span>1x </span>Crusader
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="download-img">
                <img
                  className="paroller"
                  data-paroller-factor=".03"
                  data-paroller-type="foreground"
                  data-paroller-direction="horizontal"
                  src="assets/img/images/download_img.png"
                  alt="img"
                />
                <div className="about-video about_video">
                  <video
                    id="fullscreen-video"
                    src={BgVideo}
                    autoPlay
                    muted
                    loop
                  />
                  {/*
                    <iframe src={"https://www.youtube.com/embed/HqUcaLl1EFw?autoplay=1&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center justify-content-center any_issues pt-50 mt-50 mb-50">
            <div className="col-md-10">
              <h3>
                <span className="color_red">Any issues?</span>
              </h3>
              <p>
                <span className="font_big">DEAR KATAFAM,</span>
              </p>
              <p>
              If you have encountered any issues during installation, please follow these steps to run the game:
              </p>
              <ul className="flex-column text-start">
                <oi><p>1. Please reinstall the Launcher</p></oi>
                <oi><p>2. Please accept any False Flag with your Antivirus Defender.
- You can google "False Flag software".</p></oi>
                <oi><p>3. redownload it again</p></oi>
                <oi><p>4. If you have still issues please contact us via (best support via Telegram)</p></oi>
                
              </ul>

              <ul>
                <li>
                  <a target="_blank" rel="norefferer" href="https://t.me/katanainu">
                    <div class="relative border border-[#848589] flex justify-center items-center">
                        <div class="flex justify-between items-center w-[102%] h-1 absolute z-20">
                          <div class="w-2 h-1.5 bg-black"></div>
                          <div class="w-2 h-1.5 bg-black"></div>
                        </div>
                        <button class="justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn2 fadeInLeft border border-[#f5a238] overflow-hidden font-poppins text-center transition-all duration-500 ease-in-out py-2 px-6 rounded-none hover:text-black whitespace-nowrap font-bold m-1 relative z-30 2xl:tracking-wider border-none flex items-center gap-2 md:gap-2.5 xl:gap-3 2xl:px-8 h-7 sm:h-8 lg:h-9 xl:h-10 text-[0.625rem] md:text-xs xl:text-sm bg-white text-black" type="button">
                          <div class="absolute top-0 left-0 w-1 h-1 z-40 bg-black"></div>
                          <div class="absolute bottom-0 right-0 w-1 h-1 z-40 bg-black"></div>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                          </svg>
                            Telegram
                        </button>
                    </div>
                  </a>
                </li>
                <li>
                    <a target="_blank" rel="norefferer" class="" href="mailto:support@katanainu.com">
                      <div class="relative border border-[#848589] flex justify-center items-center">
                          <div class="flex justify-between items-center w-[102%] h-1 absolute z-20">
                            <div class="w-2 h-1.5 bg-black"></div>
                            <div class="w-2 h-1.5 bg-black"></div>
                          </div>
                          <button class="justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn2 fadeInLeft border border-[#f5a238] overflow-hidden font-poppins text-center transition-all duration-500 ease-in-out py-2 px-6 rounded-none hover:text-black whitespace-nowrap font-bold m-1 relative z-30 2xl:tracking-wider border-none flex items-center gap-2 md:gap-2.5 xl:gap-3 2xl:px-8 h-7 sm:h-8 lg:h-9 xl:h-10 text-[0.625rem] md:text-xs xl:text-sm bg-white text-black" type="button">
                            <div class="absolute top-0 left-0 w-1 h-1 z-40 bg-black"></div>
                            <div class="absolute bottom-0 right-0 w-1 h-1 z-40 bg-black"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>
                            Email: support@katanainu.com
                          </button>
                      </div>
                    </a>
      </li>
                <li><a target="_blank" rel="norefferer" href="https://www.discord.gg/katanainu">
         <div class="relative border border-[#848589] flex justify-center items-center">
            <div class="flex justify-between items-center w-[102%] h-1 absolute z-20">
               <div class="w-2 h-1.5 bg-black"></div>
               <div class="w-2 h-1.5 bg-black"></div>
            </div>
            <button class="justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn2 fadeInLeft border border-[#f5a238] overflow-hidden font-poppins text-center transition-all duration-500 ease-in-out py-2 px-6 rounded-none hover:text-black whitespace-nowrap font-bold m-1 relative z-30 2xl:tracking-wider border-none flex items-center gap-2 md:gap-2.5 xl:gap-3 2xl:px-8 h-7 sm:h-8 lg:h-9 xl:h-10 text-[0.625rem] md:text-xs xl:text-sm bg-white text-black" type="button">
               <div class="absolute top-0 left-0 w-1 h-1 z-40 bg-black"></div>
               <div class="absolute bottom-0 right-0 w-1 h-1 z-40 bg-black"></div>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
               </svg>
                Discord 
            </button>
         </div>
      </a>
      </li>
              </ul>
              <ul className="game-step">
                <li className="align-center">
                  <i class="fa-solid fa-download"></i>
                  <h3>LAUNCHER</h3>
                  <p>DOWNLOAD THE LAUNCHER.</p>
                </li>
                <li className="align-center">
                  <i class="fa-solid fa-user-plus"></i>
                  <h3>REGISTER</h3>
                  <p>REGISTER YOUR ACCOUNT.</p>
                </li>
                {/* <li className="align-center">
                  <i class="fa-solid fa-wallet"></i>
                  <h3>CONNECT WALLET</h3>
                  <p>
                    CONNECT YOUR WALLET TO CHECK IF YOU HOLD ANY NFTS/TOKENS OR
                    ENTER YOUR ACCESS KEY.
                  </p>
                </li> */}
                <li className="align-center">
                  <i class="fa-solid fa-download"></i>
                  <h3>CLICK</h3>
                  <p>CLICK ON THE DOWNLOAD BUTTON.</p>
                </li>
              </ul>

              {/* <ul>
                <li>Download the launcher.</li>
                <li>Register your account</li>
                <li>
                  Connect your wallet to check if you hold any NFTs/Tokens or
                  enter your Access Key.
                </li>
                <li>Click on the download button.</li>
              </ul> */}
              {/* <p>
                QA Testers have previously reported issues with extraction. To
                resolve this problem, follow the next steps:
              </p>
              <ul className="step_list">
                <li>
                  <span>STEP 1</span>
                  Check the “Katana-Inu” file in your Downloads folder.
                </li>
                <li>
                  <span>STEP 2</span>
                  Open it and locate the “Katanainu_Game.Zip/Rar” file.
                </li>
                <li>
                  <span>STEP 3</span>
                  Extract it.
                </li>
                <li>
                  <span>STEP 4</span>
                  Move file to the correct directory.
                </li>
                <li>
                  <span>STEP 5</span>
                  Reopen the launcher and Login again.
                </li>
                <li>
                  <span>STEP 6</span>
                  Game will launch and you will need to create a New Account.
                </li>
              </ul> */}

              <p className="success">ENJOY PLAYING KATANA INU!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Downloads;
