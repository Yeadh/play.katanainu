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
          <div className="row align-items-end justify-content-center">
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
