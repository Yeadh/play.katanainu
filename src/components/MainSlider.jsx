import React from 'react';
// import { Stream } from '@cloudflare/stream-react';
import { Modal } from 'react-bootstrap';


class MainSlider extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          show: false,
          modal: false
      }
  }

  handleShow(){
      this.setState({show: true})
      window.dotq = window.dotq || [];
      window.dotq.push({
          'projectId': '10000',
          'properties': {
              'pixelId': '10176003',
              'userEmail': '<email_address>',
              'qstrings': {
                  'et': 'custom',
                  'ec':'token'
              }
          }
      });
      console.log(window.dotq)
  }

  fireMintButton(){
      window.dotq = window.dotq || [];
      window.dotq.push({
          'projectId': '10000',
          'properties': {
              'pixelId': '10176003',
              'userEmail': '<email_address>',
              'qstrings': {
                  'et': 'custom',
                  'ec':'mint'
              }
          }
      });

      console.log(window.dotq)
  }

  openModal(){
      this.setState({modal:true})
      window.dotq = window.dotq || [];
      window.dotq.push({
          'projectId': '10000',
          'properties': {
              'pixelId': '10176003',
              'userEmail': '<email_address>',
              'qstrings': {
                  'et': 'custom',
                  'ec':'discord'
              }
          }
      });
      console.log(window.dotq)
  }
render() {

  return (
	<div id="slider" className="slider-active">

        <div className="single-slider">
          <div className="banner-area banner-bg">

            <video className="bannerVideo" autoPlay muted loop poster="assets/img/banner/banner_bg02.jpg">
              <source src="assets/img/banner/video_6.mp4" type="video/mp4" />
            </video>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-content-2 text-center">
                    <h4 className="sub-title" data-animation="fadeInUp" data-delay=".2s" data-duration="2s">KATANA INU PC GAME</h4>
                    <h2 className="title" data-animation="fadeInUp" data-delay=".4s" data-duration="2s"> NFT ECOSYSTEM</h2>
                    <p data-animation="fadeInUp" data-delay=".6s" data-duration="2s" className='banner-long-text'><a href="https://katanainu.com/">Katana Inu</a> - We have developed a sophisticated ecosystem for a Play-2-Earn Battle Royale PC game powered by NFTs with its own Integrated Cross-Chain NFT-Marketplace. We are pushing the boundaries of what blockchain technology can achieve with our unique Play-2-Earn gaming ideas. P2E Gaming is the future. </p><br></br>
                    <p className='banner-short-text'>Join Katana and be a part of the future.</p>
                    <div className="banner-btn-wrap">
                      <a href="https://nft.katanainu.com/" className="btn" target="_blank" rel="noreferrer" data-animation="fadeInLeft" data-delay=".8s" data-duration="2s" >
                        nft pages
                      </a>
                      <a href="/#" className="btn"  data-animation="fadeInRight" data-delay=".8s" data-duration="2s" onClick={() => this.handleShow() }>
                        buy token
                      </a>
                      {/* <a href="/#" className="btn"  data-animation="fadeInRight" data-delay=".8s" data-duration="2s" onClick={() => this.openModal() }>
                        Discord/Telegram
                      </a> */}
                      <a href="https://staking.katanainu.com/" className="btn" target="_blank" rel="noreferrer" data-animation="fadeInLeft" data-delay=".8s" data-duration="2s" >
                        Staking Here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            <Modal
                show={this.state.show}
                onHide={()=>this.setState({show:false})}
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
              onHide={()=>this.setState({modal:false})}
              aria-labelledby="contained-modal-title-vcenter"
              centered>
                  <Modal.Body className='p-5'>
                          <p>
                              <a
                              className='btn d-block'
                              target="_blank"
                              rel="noreferrer"
                              href='https://t.me/katanainu'
                              style={{background : '#0077b5'}}>
                                  <i className="fab fa-telegram" style={{marginRight:'15px'}}></i>
                                  <span>Telegram</span>
                              </a>
                          </p>
                          <p>
                              <a
                              className='btn d-block'
                              target="_blank"
                              rel="noreferrer"
                              href='https://www.discord.gg/katanainu'
                              style={{background : '#FF4301'}}>
                                  <i className="fab fa-discord" style={{marginRight:'15px'}}></i>
                                  <span>Discord</span>
                              </a>
                          </p>
                  </Modal.Body>
              </Modal>


  </div>
  )
}
}

export default MainSlider