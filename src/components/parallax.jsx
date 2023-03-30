import React from 'react';
import { Parallax } from 'react-parallax';
import { Modal } from 'react-bootstrap';
class ParallaxBg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modal: false
        }
    }

    handleShow() {
        this.setState({ show: true })
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec': 'token'
                }
            }
        });
        console.log(window.dotq)
    }

    fireMintButton() {
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec': 'mint'
                }
            }
        });

        console.log(window.dotq)
    }

    openModal() {
        this.setState({ modal: true })
        window.dotq = window.dotq || [];
        window.dotq.push({
            'projectId': '10000',
            'properties': {
                'pixelId': '10176003',
                'userEmail': '<email_address>',
                'qstrings': {
                    'et': 'custom',
                    'ec': 'discord'
                }
            }
        });
        console.log(window.dotq)
    }
    render() {
        return(

    <Parallax className='image' blur={0} bgImage="" strength={200} bgImageStyle={{ minHeight: "100vh"}}>

        <section className="parallax-area">
            <div className="banner-bg">
                <video src="assets/img/banner/video.mp4" autoPlay muted loop></video>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        {/* <img className='character-image' src="assets/img/parallax/character1.png" alt="" /> */}
                        <div className="parallax-content mb-30">
                            {/* <span className="img-txt">a trip to Space</span> */}
                                <h1><img className='parallax-logo paroller' data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal" src="assets/img/parallax/logo.png" alt="" /></h1>
                                <h2 className='d-none'>nft pc game</h2>
                            <div className="banner-btn-wrap mt-30">
                                <div className="wow fadeInLeft" data-wow-delay=".8s" data-animation="fadeInLeft"><a href="https://kainu.io/" target="_blank" rel="noreferrer" className="btn">MINT NFTs <i class="fa-solid fa-chevron-right"></i></a></div>
                                <div className="wow fadeInUp" data-wow-delay=".8s" data-animation="fadeInUp"><a href="# " className="btn" onClick={() => this.handleShow()}>buy token <i class="fa-solid fa-chevron-right"></i></a></div>
                                <div className="wow fadeInRight" data-wow-delay=".8s" data-animation="fadeInRight"><a href="https://staking.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Staking Here <i class="fa-solid fa-chevron-right"></i></a></div>
                            </div>
                        </div>

                    </div>

                    <Modal
                        show={this.state.show}
                        onHide={() => this.setState({ show: false })}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Body className='p-5'>
                            <p><a className='btn d-block btn-primary' href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet' rel='noreferrer' target='_blank'>Uniswap</a></p>
                            <p><a className='btn d-block' href='https://pancakeswap.finance/swap?outputCurrency=0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205' rel='noreferrer' target='_blank'>Pancake Swap</a></p>
                            <p><a className='btn d-block btn-success' href='https://www.bitmart.com/trade/en?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Bitmart</a></p>
                            <p><a className='btn d-block btn-danger' href='https://www.hotbit.io/exchange?symbol=KATA_USDT' rel='noreferrer' target='_blank'>Hotbit</a></p>
                            <p><a className='btn d-block btn-secondary' href='https://www.probit.com/app/exchange/KATA-USDT' rel='noreferrer' target='_blank'>Probit</a></p>
                            <p><a className='btn d-block btn-secondary' href='https://www.digifinex.com/en-ww/trade/USDT/KATA' rel='noreferrer' target='_blank'>DIGIFINEX</a></p>
                            <p><a className='btn d-block btn-secondary' href='https://www.mexc.com/de-DE/exchange/KATA_USDT' rel='noreferrer' target='_blank'>MEXC</a></p>
                        </Modal.Body>
                    </Modal>
                    <Modal
                        show={this.state.modal}
                        onHide={() => this.setState({ modal: false })}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Body className='p-5'>
                            <p>
                                <a
                                    className='btn d-block'
                                    target="_blank"
                                    rel="noreferrer"
                                    href='https://t.me/katanainu'
                                    style={{ background: '#0077b5' }}>
                                    <i className="fab fa-telegram" style={{ marginRight: '15px' }}></i>
                                    <span>Telegram</span>
                                </a>
                            </p>
                            <p>
                                <a
                                    className='btn d-block'
                                    target="_blank"
                                    rel="noreferrer"
                                    href='https://www.discord.gg/katanainu'
                                    style={{ background: '#FF4301' }}>
                                    <i className="fab fa-discord" style={{ marginRight: '15px' }}></i>
                                    <span>Discord</span>
                                </a>
                            </p>
                        </Modal.Body>
                    </Modal>



                </div>
            </div>
        </section>
    </Parallax>
);
                    }}
export default ParallaxBg